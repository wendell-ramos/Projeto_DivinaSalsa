# Plano de segurança — Divina Salsa

Este documento define a base obrigatória do site público e do futuro painel administrativo.
Ele não substitui a configuração efetiva dos serviços: cada controle deve ser testado antes da publicação.

## 1. Modelo de risco

### Site público atual

- Conteúdo estático e somente leitura.
- Sem formulário, autenticação, API ou acesso ao banco.
- Principais riscos: dependência vulnerável, alteração indevida do repositório, vazamento de segredo no build, script injetado e configuração incorreta do domínio.

### Painel futuro

- Permitirá alterar conteúdo exibido ao público.
- Principais riscos: invasão de conta, autorização incorreta, conteúdo malicioso, alteração acidental, abuso da API e perda de dados.
- O painel não deverá aceitar pagamentos, dados de clientes ou informações sensíveis do restaurante.

## 2. Contas e propriedade

- Usar uma conta Cloudflare pertencente ao restaurante para a produção definitiva.
- Ativar autenticação em dois fatores no Cloudflare, GitHub e e-mail usado na recuperação.
- Guardar os códigos de recuperação fora do computador principal.
- Conceder acesso individual, nunca compartilhar senha.
- Manter apenas os usuários necessários e revisar os acessos a cada três meses.
- Restringir o aplicativo GitHub da Cloudflare somente a este repositório.

## 3. Repositório e publicação

- A branch `main` é a origem da produção.
- Alterações importantes devem passar por build, lint e auditoria de dependências antes da publicação.
- Dependabot acompanha pacotes npm e ações do GitHub; atualizações não devem ser mescladas sem testes.
- Nenhuma chave, token, senha, arquivo `.env` real ou credencial deve entrar no Git.
- Builds de preview devem manter `SITE_INDEXABLE=false`.
- O ambiente de produção só deve publicar a partir do repositório oficial.

## 4. Site público

- Cabeçalhos de segurança são definidos em `public/_headers` para o Cloudflare Pages.
- A política de conteúdo permite scripts e estilos somente da própria origem. `unsafe-inline` permanece apenas pela compatibilidade da exportação estática do Next.js; scripts de terceiros não devem ser adicionados sem nova revisão.
- O site não pode ser incorporado por outros sites (`frame-ancestors 'none'`).
- Recursos desnecessários do navegador, como câmera, microfone, geolocalização e pagamento, ficam bloqueados.
- Links que abrem nova aba devem usar `noopener noreferrer`.
- Dados estruturados devem ser serializados por `serializeJsonLd`.
- Não inserir HTML vindo do painel com `dangerouslySetInnerHTML`.

## 5. Arquitetura do painel

O painel deve ser uma aplicação protegida, separada das páginas públicas:

1. `/painel/*` e as rotas administrativas ficam atrás do Cloudflare Access.
2. A política do Access libera somente e-mails cadastrados do restaurante e do desenvolvedor durante a manutenção.
3. A API valida no servidor a identidade emitida pelo Access; esconder botões no navegador não é autorização.
4. Toda escrita passa por uma camada única de acesso aos dados.
5. O D1 é acessado somente por binding do Cloudflare, nunca diretamente pelo navegador.
6. Consultas usam parâmetros preparados e retornam apenas os campos necessários.
7. Rotas públicas de leitura e rotas administrativas de escrita permanecem separadas.

O painel não deve usar uma senha própria simples nem armazenar sessão no `localStorage`.

## 6. Validação e autorização

- Validar tipo, tamanho, formato e campos permitidos em todas as entradas no servidor.
- Rejeitar campos desconhecidos e textos acima dos limites definidos.
- Armazenar conteúdo como texto, não como HTML.
- Conferir `Origin` nas operações de criação, edição e exclusão.
- Exigir método HTTP correto e resposta genérica para tentativas inválidas.
- Aplicar limite de requisições nas rotas administrativas.
- Não confiar em identificadores, permissões ou preços enviados pelo navegador.
- Na primeira versão, não permitir upload de arquivos. Se isso for necessário depois, usar R2 e validar assinatura, MIME, extensão, tamanho e dimensões.

## 7. Dados, histórico e recuperação

- Separar banco de desenvolvimento/preview do banco de produção.
- Alterar a estrutura do banco somente por migrações versionadas.
- Manter registro de auditoria com usuário, ação, item, data e resumo da alteração, sem salvar tokens.
- Usar exclusão lógica ou histórico de versões para itens do cardápio sempre que possível.
- Fazer exportação antes de migrações e mudanças em massa.
- Testar a restauração do D1 antes de considerar o painel pronto.
- Definir quem pode restaurar dados e registrar cada restauração.

## 8. Segredos e privacidade

- Segredos ficam em Cloudflare Secrets ou bindings protegidos.
- Variáveis com prefixo `NEXT_PUBLIC_` são públicas e nunca podem conter segredos.
- Logs não devem registrar cookies, tokens, códigos de acesso ou dados pessoais.
- O site coleta apenas o mínimo necessário. Qualquer ferramenta de métricas ou marketing exige revisão de privacidade e atualização da política de conteúdo.

## 9. Monitoramento e resposta a incidentes

- Monitorar falhas de autenticação, aumento anormal de erros e alterações administrativas.
- Em suspeita de invasão: bloquear o acesso, revogar sessões e tokens, preservar logs, restaurar a última versão confiável e trocar credenciais afetadas.
- Depois do incidente: identificar a causa, corrigir, testar, documentar e somente então reabrir o painel.
- Manter um contato do restaurante responsável por autorizar bloqueio e restauração.

## 10. Critérios para publicar o painel

- Cloudflare Access testado com usuário autorizado e não autorizado.
- Validação e autorização testadas diretamente nas rotas da API.
- Nenhum segredo presente no bundle, HTML, repositório ou logs.
- Limite de requisições ativo.
- Auditoria das alterações funcionando.
- Backup e restauração testados.
- Banco de preview separado do banco de produção.
- Revisão em celular e desktop sem erros no console.
- Build, lint e auditoria de dependências aprovados.

Enquanto esses critérios não forem cumpridos, o painel deve permanecer somente em ambiente local ou preview protegido.
