import { renderToBuffer } from '@react-pdf/renderer'
import { ResumePDF } from '@/components/resume-pdf'

export async function GET() {
  const buffer = await renderToBuffer(<ResumePDF />)

  return new Response(buffer, {
    headers: {
      'Content-Type': 'application/pdf',
      'Content-Disposition': 'attachment; filename="shane-williams-cv.pdf"',
      'Cache-Control': 'public, max-age=3600',
    },
  })
}
