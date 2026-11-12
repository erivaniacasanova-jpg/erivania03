"use client"

const VIDEOS = [1, 2, 3, 4, 5].map((video) => `/api/formularios-video/${video}`)

export default function VideoRow() {
  return (
    <div className="mt-8 w-full overflow-x-auto pb-4">
      <div className="flex w-max flex-row items-start justify-start gap-4 px-1 sm:gap-5">
        {VIDEOS.map((src, i) => (
          <video
            key={src}
            controls
            controlsList="nodownload"
            disablePictureInPicture
            preload="auto"
            playsInline
            onContextMenu={(e) => e.preventDefault()}
            aria-label={`Vídeo de apresentação ${i + 1}`}
            className="h-[360px] w-[202px] flex-shrink-0 rounded-xl bg-black object-contain shadow-lg sm:h-[440px] sm:w-[248px]"
          >
            <source src={src} type="video/mp4" />
          </video>
        ))}
      </div>
    </div>
  )
}
