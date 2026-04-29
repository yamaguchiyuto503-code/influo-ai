import { motion } from "framer-motion";

export default function SilkLines() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
      {/* Solid background base */}
      <div className="absolute inset-0 bg-white/40"></div>
      
      {/* 
        The Fog Orbs (Aurora Mesh Gradient)
        Large div circles with heavy blur to create ambient light pools.
      */}
      
      {/* Cyan orb 1 (Flying Fish 1) */}
      <motion.div
        className="absolute rounded-[100%] mix-blend-multiply filter blur-[120px] opacity-40"
        style={{
          width: '100vw',
          height: '35vh',
          background: 'radial-gradient(ellipse, rgba(5,208,208,0.8) 0%, rgba(5,208,208,0) 70%)',
          left: '-10%',
          top: '20%'
        }}
        animate={{
          x: [0, 200, -100, 0],
          y: [0, -100, 150, 0],
          rotate: [-15, 10, -15],
          scale: [1, 1.1, 0.9, 1],
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
      />
      
      {/* Orange orb 1 (Flying Fish 2) */}
      <motion.div
        className="absolute rounded-[100%] mix-blend-multiply filter blur-[120px] opacity-35"
        style={{
          width: '90vw',
          height: '40vh',
          background: 'radial-gradient(ellipse, rgba(255,94,68,0.8) 0%, rgba(255,94,68,0) 70%)',
          right: '-10%',
          bottom: '25%'
        }}
        animate={{
          x: [0, -250, 100, 0],
          y: [0, 150, -150, 0],
          rotate: [20, -10, 20],
          scale: [1, 1.2, 0.8, 1],
        }}
        transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
      />
      
      {/* Cyan orb 2 (Background filler) */}
      <motion.div
        className="absolute w-[60vw] h-[60vh] rounded-full mix-blend-multiply filter blur-[100px] opacity-25"
        style={{
          background: 'radial-gradient(circle, rgba(5,208,208,0.6) 0%, rgba(5,208,208,0) 70%)',
          left: '10%',
          bottom: '-10%'
        }}
        animate={{
          x: [0, 100, -50, 0],
          y: [0, 100, -150, 0],
          scale: [1, 1.4, 0.7, 1],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      />

      {/* Global Noise Texture to make it look premium (reduces banding) */}
      <div 
        className="absolute inset-0 opacity-[0.04] mix-blend-overlay" 
        style={{ backgroundImage: "url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MDAiIGhlaWdodD0iNDAwIj48ZmlsdGVyIGlkPSJuIj48ZmVUdXJidWxlbmNlIHR5cGU9ImZyYWN0YWxOb2lzZSIgYmFzZUZyZXF1ZW5jeT0iMC44IiBudW1PY3RhdmVzPSI0IiBzdGl0Y2hUaWxlcz0ic3RpdGNoIi8+PC9maWx0ZXI+PHJlY3Qgd2lkdGg9IjQwMCIgaGVpZ2h0PSI0MDAiIGZpbHQ9InVybCgjbikiIG9wYWNpdHk9IjAuNiIvPjwvc3ZnPg==')" }}
      />
      
      {/* Frost glass overlay to soften everything and blend it seamlessly */}
      <div className="absolute inset-0 bg-white/20 backdrop-blur-[40px]" />
    </div>
  );
}
