import { FastifyInstance } from "fastify";
import { prisma } from '../lib/prisma'
import { z } from 'zod'

export async function createTranscriptionRoute(app: FastifyInstance){
    app.post('/videos/:videoId/transcription', async (request) => {
        const paramsSchema = z.object({
            videoId: z.string().uuid(),
        })
        const videoId = paramsSchema.parse(request.params)
    })
}