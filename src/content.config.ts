import { z, defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';

const periodosCollection = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/periodos' }),
  schema: z.object({
    numero: z.number(),
    anio: z.string(),
    titulo: z.string(),
    descripcion: z.string().optional(),
    secciones: z.array(z.object({
      nombre: z.string(),
      url: z.string(),
      icono: z.string().optional(),
    })),
  }),
});

const sesionesCollection = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/sesiones' }),
  schema: z.object({
    numero: z.number(),
    reunion: z.string(), // I, II, III, etc.
    fecha: z.string(),
    tipo: z.string(), // "De Apertura", "Sesión Ordinaria", etc.
    fojas: z.string(), // "1 - 30"
    periodo: z.number(),
    contenido: z.string().optional(),
  }),
});

export const collections = {
  'periodos': periodosCollection,
  'sesiones': sesionesCollection,
};