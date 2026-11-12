import { type NextRequest, NextResponse } from "next/server"

const VIDEO_BASE_URL = "https://videos.suanetturbinada.com.br/formulariodecadastro"

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ video: string }> },
) {
  const { video } = await params
  const videoNumber = Number(video)

  if (!Number.isInteger(videoNumber) || videoNumber < 1 || videoNumber > 5) {
    return NextResponse.json({ message: "Vídeo não encontrado" }, { status: 404 })
  }

  const range = request.headers.get("range")
  const headers = new Headers()
  if (range) headers.set("Range", range)

  const response = await fetch(`${VIDEO_BASE_URL}/formulario${videoNumber}.mp4`, {
    headers,
    next: { revalidate: 14400 },
  })

  if (!response.ok || !response.body) {
    return NextResponse.json({ message: "Não foi possível carregar o vídeo" }, { status: 502 })
  }

  const responseHeaders = new Headers({
    "Content-Type": "video/mp4",
    "Accept-Ranges": "bytes",
    "Cache-Control": "public, max-age=14400",
    "Content-Disposition": "inline",
  })

  for (const header of ["content-length", "content-range"]) {
    const value = response.headers.get(header)
    if (value) responseHeaders.set(header, value)
  }

  return new NextResponse(response.body, {
    status: response.status,
    headers: responseHeaders,
  })
}
