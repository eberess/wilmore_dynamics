import { NextResponse } from 'next/server';
import { getNewCSRFToken } from '@/lib/csrf';

/**
 * GET /api/csrf
 * Retourner un nouveau token CSRF et session ID
 * À appeler avant de soumettre le formulaire
 */
export async function GET(request: Request) {
  try {
    const { sessionId, token } = await getNewCSRFToken();

    return NextResponse.json(
      { sessionId, token },
      {
        status: 200,
        headers: {
          'Cache-Control': 'no-store, no-cache, must-revalidate',
          'Pragma': 'no-cache',
        },
      }
    );
  } catch (error) {
    console.error('Error generating CSRF token:', error);
    return NextResponse.json(
      { error: 'Failed to generate CSRF token' },
      { status: 500 }
    );
  }
}

// Désactiver le cache pour cet endpoint
export const revalidate = 0;
