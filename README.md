# E-commerce Dashboard

SPA de um dashboard para e-commerce. Feito com [Next.js](https://nextjs.org/), com [Tailwind](https://tailwindcss.com/) e [Shadcn/ui](https://ui.shadcn.com/). Autenticação feita com [Clerk Auth](https://clerk.com/). Tamném utiliza [Zustand](https://github.com/pmndrs/zustand) para gerenciamento de estado. Como banco de dados, utiliza MySQL com [Prisma](https://www.prisma.io/) e [PlanetScale](https://planetscale.com/). Para gerenciamento de imagens utiliza [Cloudinary](https://cloudinary.com/) e para pagamentos [Stripe](https://stripe.com/).

Dentro do dashboard há opção para criação e edição de múltiplas lojas, adicionar, editar e remover banners, categorias, tamanhos, cores e produtos, estes com opções para múltiplas imagens, para marcação como destaque e para arquivamento, e registro de pedidos, todos pesquisáveis. Ainda há opção para troca de tema e gerenciamento de conta.

No dashboard é possível visualizar a quantidade de produtos vendidos, o lucro total e o número de produtos cadastrados, tal qual como um gráfico com as vendas mensais.

Também disponibiliza as rotas API para acesso externo de cada um dos items.

O front desse projeto pode ser acessado em https://ecomm-store-olive.vercel.app/ e neste [repositório](https://github.com/arthur-dias/ecomm-store).

---

## Rodando o projeto

- Clonar este repositório
- Na pasta raiz do projeto, no terminal, rodar `npm install`
- Na pasta raiz do projeto, criar um arquivo `.env` e adicionar as seguintes chaves:

```
# FROM CLERK AUTH
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_key
CLERK_SECRET_KEY=your_key
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/yourchosenroute
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/yourchosenroute
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/yourchosenroute
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/yourchosenroute

# FROM PLANETSCALE
DATABASE_URL='yoururl'

# FROM CLOUDINARY
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME="yourcloudname"

# FROM STRIPE
STRIPE_API_KEY=yourkey
FRONTEND_STORE_URL=yourfrontendstoreurl
STRIPE_WEBHOOK_SECRET=yourkey
```

- No terminal, rodar `npm run dev`
- Acessar por http://localhost:3000/

## Tech Stack

- [Next.js](https://nextjs.org/)
- [Tailwind](https://tailwindcss.com/)
- [Shadcn/ui](https://ui.shadcn.com/)
- [Clerk Auth](https://clerk.com/)
- [Zustand](https://github.com/pmndrs/zustand)
- [Zod](https://zod.dev/)
- [Prisma](https://www.prisma.io/)
- [PlanetScale](https://planetscale.com/)
- [Cloudinary](https://cloudinary.com/)
- [Stripe](https://stripe.com/)
- [Recharts](https://recharts.org/en-US/)
