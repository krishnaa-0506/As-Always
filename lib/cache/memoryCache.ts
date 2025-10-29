interface CacheEntry {
  value: any;
  expiry: number;
}

class MemoryCache {
  private cache: Map<string, CacheEntry> = new Map();

  get(key: string): any | null {
    const entry = this.cache.get(key);
    if (entry && Date.now() < entry.expiry) {
      return entry.value;
    }
    this.cache.delete(key);
    return null;
  }

  set(key: string, value: any, ttl: number) {
    const expiry = Date.now() + ttl;
    this.cache.set(key, { value, expiry });
  }
}

export const memoryCache = new MemoryCache();
