'use client'

import { motion } from 'framer-motion'

interface PreviewScreenProps {
  messageData: any;
  onComplete: () => void;
  onBack: () => void;
}

export default function PreviewScreen({ messageData, onComplete, onBack }: PreviewScreenProps) {
  return (
    <motion.div
      className="glass-panel p-8 max-w-3xl mx-auto text-center"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-3xl font-cinematic text-white mb-4">Preview Your Message</h2>
      <p className="text-white/70 mb-8">This is a preview of the information that will be used to generate your message.</p>

      <div className="text-left space-y-4 bg-white/10 p-6 rounded-lg">
        <p><span className="font-bold">Sender:</span> {messageData.senderName}</p>
        <p><span className="font-bold">Receiver:</span> {messageData.receiverName}</p>
        <p><span className="font-bold">Relationship:</span> {messageData.relationship}</p>
        <p><span className="font-bold">Emotion:</span> {messageData.emotionTag || 'Not specified'}</p>
        <p><span className="font-bold">Song:</span> {messageData.selectedSong || 'Not specified'}</p>
        <p><span className="font-bold">Memories:</span> {messageData.memories.length} files</p>
        <p><span className="font-bold">Voice Note:</span> {messageData.voiceNote ? 'Included' : 'Not included'}</p>
      </div>

      <div className="flex justify-between mt-8">
        <button onClick={onBack} className="btn-secondary">Back</button>
        <button onClick={onComplete} className="btn-primary">Looks Good, Generate!</button>
      </div>
    </motion.div>
  )
}
