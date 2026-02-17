import { NextResponse } from 'next/server';
import { auth } from '@/lib/auth'; // Ou seu middleware de preferência

export async function POST(req: Request) {
  // 1. Obter a sessão/usuário autenticado
  const session = await auth(); 
  
  if (!session?.user) {
    return NextResponse.json({ error: 'Não autenticado' }, { status: 401 });
  }

  // 2. Pegar os dados da requisição
  const { userId, message } = await req.json();

  // 3. A CORREÇÃO: Validação de Impersonation (Identidade)
  // Garante que o usuário logado só possa postar para si mesmo
  if (userId !== session.user.id) {
    return NextResponse.json(
      { error: 'Unauthorized: User impersonation detected' }, 
      { status: 403 } // 403 é mais preciso aqui (Proibido)
    );
  }

  // 4. Prosseguir com a geração do chat...
  // ... lógica de IA ou banco de dados
}