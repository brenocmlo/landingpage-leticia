# 🌸 Leticia Terceiro | Estética Facial & Corporal Avançada

Uma **Landing Page Premium** de alta fidelidade e performance para uma clínica de estética avançada, desenvolvida com **Next.js** e **Vanilla CSS Modules**. O design foi minuciosamente elaborado para transmitir luxo, sofisticação e autoridade, integrando animações modernas e foco absoluto em conversão (UX/UI para captação de clientes via WhatsApp).

---

## ✨ Características do Projeto

* 🎨 **A estética visual "Premium"**: Inspirada nas melhores clínicas de dermatologia e estética. Utiliza uma paleta minimalista e aconchegante baseada em tons neutros de creme, marinho profundo e detalhes em bronze/ouro.
* ⚡ **Performance Ultra Otimizada**:
  * Imagem de LCP (Largest Contentful Paint) no Hero otimizada nativamente com `fetchpriority="high"` e compressão de formato moderna.
  * Carregamento de fontes (*Outfit* para títulos e *Inter* para o corpo) via `next/font/google` para evitar oscilações de layout (CLS).
* 📱 **Totalmente Responsivo**: Layout fluido desenvolvido com técnicas modernas de Grid e Flexbox, proporcionando uma experiência impecável tanto em celulares quanto em telas ultra-wide.
* 🖱️ **Micro-interações e Animações Fluidas**:
  * **Shrinking Header**: Menu fixo superior que se contrai suavemente e ganha desfoque de fundo (*backdrop-filter*) ao rolar a página.
  * **Interactive Procedures**: Seção de procedimentos interativa estilo "Tabbed Component", onde o usuário navega verticalmente entre os tratamentos, alternando instantaneamente imagens, descrições, preços e vantagens.
  * **Scroll Reveal**: Efeito de fade-in e scale acionado sob demanda à medida que os elementos entram no viewport, utilizando a API de alta performance `IntersectionObserver`.
* 🤖 **Assets de Alta Fidelidade**: Todas as imagens do projeto foram criadas exclusivamente usando geração de imagens por inteligência artificial para representar cenários clínicos e profissionais de altíssimo padrão.

---

## 🛠️ Tecnologias Utilizadas

* **Framework**: [Next.js](https://nextjs.org/) (App Router)
* **Linguagem**: JavaScript (ES6+)
* **Estilização**: CSS Modules (Vanilla CSS puro, garantindo zero dependências extras e isolamento completo de estilos)
* **Fontes**: Google Fonts (*Outfit* e *Inter*)
* **Ícones**: Font Awesome (via CDN)
* **Otimização de Mídia**: `next/image`

---

## 📂 Estrutura do Projeto

```text
├── src/
│   ├── app/
│   │   ├── globals.css      # Sistema de cores, tipografia, resets e animações globais
│   │   ├── layout.js       # Configuração do HTML, metadados SEO e fontes
│   │   └── page.js         # Estrutura principal da página e controle do Scroll Reveal
│   ├── components/         # Componentes modulares e reutilizáveis
│   │   ├── About.js        # Apresentação profissional da Dra. Leticia
│   │   ├── Footer.js       # Informações finais de contato e navegação
│   │   ├── Header.js       # Menu dinâmico superior com scroll-effect e responsividade
│   │   ├── Hero.js         # Seção principal com o primeiro CTA
│   │   ├── Procedures.js   # Abas interativas de tratamentos
│   │   ├── QuickCategories.js # Barra de rápido acesso de especialidades
│   │   └── Technology.js   # Seção dedicada ao Endolaser e tecnologia clínica
│   └── config/
│       └── clinic.js       # Centralização dos dados de contato, WhatsApp e serviços
└── public/
    └── images/             # Imagens geradas com alta resolução clínica
```

---

## 🚀 Como Executar o Projeto Localmente

1. **Clone o repositório:**
   ```bash
   git clone https://github.com/seu-usuario/landingpage-leticia.git
   cd landingpage-leticia
   ```

2. **Instale as dependências:**
   ```bash
   npm install
   ```

3. **Inicie o servidor de desenvolvimento:**
   ```bash
   npm run dev
   ```

4. **Abra o navegador:**
   Acesse [http://localhost:3000](http://localhost:3000) para ver o projeto funcionando em tempo real.

---

## 📦 Build para Produção

Para testar a otimização máxima da página e gerar os arquivos estáticos de produção:

```bash
npm run build
```

O Next.js compilará o projeto de forma estática (SSG), assegurando que o tempo de carregamento da landing page seja menor que 1 segundo, essencial para campanhas de tráfego pago (Google Ads/Meta Ads).
