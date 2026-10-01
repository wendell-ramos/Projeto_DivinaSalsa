# Divina Salsa Restaurante

Novo site institucional do **Divina Salsa Restaurante**, localizado no Passeio Pedra Branca, em Palhoça/SC.

O projeto apresenta o restaurante, seus ambientes, cardápio e eventos, além de reunir os canais oficiais para reservas pelo WhatsApp, pedidos no iFood e localização.

## Site publicado

[wendell-ramos.github.io/Projeto_DivinaSalsa](https://wendell-ramos.github.io/Projeto_DivinaSalsa/)

## Páginas

- **Início:** apresentação da casa, pratos em destaque, experiência e informações para visita.
- **Espaço:** descrição dos ambientes, galeria de fotos e horários de funcionamento.
- **Cardápio:** cardápio completo organizado por categorias e sugestões da casa.
- **Eventos:** informações, registros de eventos e contato direto pelo WhatsApp.
- **Contato:** horários, endereço, localização, reservas e delivery.

## Recursos atuais

- Layout responsivo para celulares, tablets e computadores.
- Navegação mobile e componentes compartilhados de cabeçalho e rodapé.
- Integrações com WhatsApp, iFood, Instagram e Google Maps.
- Fotografias em WebP com variantes adequadas a diferentes tamanhos de tela.
- Metadados para compartilhamento, sitemap e configuração de indexação.
- Exportação estática e publicação automática no GitHub Pages.

## Tecnologias

- Next.js 16 com App Router
- React 19
- TypeScript
- Tailwind CSS 4 e CSS Modules

## Executar localmente

Requer Node.js 22 ou uma versão compatível com o projeto.

```bash
npm ci
npm run dev
```

O site ficará disponível em [http://localhost:3000](http://localhost:3000).

## Verificações

```bash
npm run check
npm run security:audit
```

O comando de build gera o site estático na pasta `out`.

## Segurança

- Cabeçalhos de proteção são publicados pelo Cloudflare Pages por meio de `public/_headers`.
- Arquivos `.env` reais são ignorados; `.env.example` documenta somente valores não confidenciais.
- O workflow executa auditoria de dependências, lint e build antes da publicação.
- Dependabot acompanha atualizações do npm e das GitHub Actions.
- As regras do futuro painel, banco e resposta a incidentes estão em [docs/SEGURANCA.md](docs/SEGURANCA.md).

Falhas devem ser comunicadas de forma privada conforme [SECURITY.md](SECURITY.md).

## Imagens

As variantes responsivas são geradas pelo script:

```bash
python scripts/optimize_images.py
```

O script preserva as imagens principais e cria versões menores em `public/images/optimized/responsive`.

## Publicação

Todo push na branch `main` aciona o workflow de publicação do GitHub Pages definido em `.github/workflows/publicar-pages.yml`.

Durante o build, o workflow configura o caminho base do repositório e a URL pública usada pelos metadados, sitemap e regras de indexação.

## Próxima etapa

O painel administrativo será planejado depois da aprovação do conteúdo visual e da definição, com o restaurante, das informações que deverão ser editáveis.
