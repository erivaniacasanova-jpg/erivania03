"use client"

const VIDEOS = [
  "https://videos.suanetturbinada.com.br/formulariodecadastro/formulario1.mp4",
  "https://videos.suanetturbinada.com.br/formulariodecadastro/formulario2.mp4",
  "https://videos.suanetturbinada.com.br/formulariodecadastro/formulario3.mp4",
  "https://videos.suanetturbinada.com.br/formulariodecadastro/formulario4.mp4",
  "https://videos.suanetturbinada.com.br/formulariodecadastro/formulario5.mp4",
]

export default function VideoRow() {
  return (
    <div className="flex flex-row gap-2 sm:gap-3 justify-center items-start mt-6 overflow-x-auto pb-2">
      {VIDEOS.map((src, i) => (
        <video
          key={i}
          controls
          controlsList="nodownload noplaybackrate"
          disablePictureInPicture
          preload="none"
          playsInline
          onContextMenu={(e) => e.preventDefault()}
          className="aspect-[9/16] h-32 sm:h-40 md:h-48 rounded-lg shadow-md object-cover flex-shrink-0"
        >
          <source src={src} type="video/mp4" />
        </video>
      ))}
    </div>
  )
}
