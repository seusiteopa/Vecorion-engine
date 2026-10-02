# Vecorion Engine — v1.0

Core real + 2 motores funcionais (Sites, Imagens) + interface em um único HTML. **Sem dependências externas** (só Node.js 18+).

## Usar
```
npm start                 # abre http://127.0.0.1:8787
npm test                  # 28 testes automatizados do Core
```
Variáveis: `PORT`, `HOST`, `VECORION_TOKEN`, `VECORION_DATA` (pasta de dados), `VECORION_RITMO_MS` (pausa entre etapas, padrão 400 ms, só para a interface mostrar o progresso).
Configuração: `config/config.json`.

## O que existe
| Parte | Estado |
|---|---|
| Interface (`interface/index.html`) | pronta; conecta ao Core; sem servidor, roda em modo simulado |
| Core (`core/`): planejar, executar, validar, corrigir, cancelar, eventos | funcional |
| Motor de Sites | **v0**: página-base com o texto do pedido, sem conteúdo comercial inventado |
| Motor de Imagens | **v0**: composição procedural em SVG, determinística |
| Motor de Vídeos | **v0**: abertura animada com o título do pedido, MP4 (H.264) 1280x720, até 60 s. **Requer FFmpeg instalado** (ou `VECORION_FFMPEG`); sem ele o motor aparece como indisponível |
| Sandbox, runner de nuvem, sincronização, pesquisa web, áudio, documentos | **não implementados** |
| Armazenamento | arquivos JSON por projeto em `dados/` (decisão provisória no lugar de SQLite) |

## Segurança
- Escuta só em `127.0.0.1`. Fora disso o servidor **recusa iniciar** sem `VECORION_TOKEN` (acesse uma vez `/?t=TOKEN` para receber o cookie).
- Texto do usuário nunca vira comando. Os motores atuais só escrevem texto na pasta do projeto. O motor de vídeo executa o FFmpeg: o texto do pedido nunca entra nos argumentos (vai por arquivo, com `expansion=none`), sem shell, com prazo de 120 s e limite de 100 MB. Isso **não é um sandbox completo**; para uso fora do computador local, rode o Core em contêiner ou usuário restrito.
- Validação de entrada, limite de corpo (64 KB), checagem de origem em POST, downloads só de arquivos da lista do projeto, `attachment` + CSP `sandbox`, cabeçalhos de segurança. A interface exige `unsafe-inline` por ser um único HTML.
- Sem HTTPS próprio nem login de usuários: para uso fora do computador local, coloque atrás de um proxy HTTPS.

## Limites conhecidos
Interface não testada em navegador real (FPS, toque, leitor de tela, tema claro). Modo conectado testado só contra o Core por script. Logo ainda provisório.

## Publicar: interface no Netlify + Core em servidor com FFmpeg
O Netlify só serve arquivos estáticos; o Core (Node + FFmpeg + disco) precisa de um servidor próprio.
1. **Core:** em Render, Railway, Fly etc., crie um serviço a partir deste repositório usando o `Dockerfile` (já instala FFmpeg e fonte). Variáveis:
   - `VECORION_TOKEN`: obrigatório fora do localhost. Use um valor aleatório longo (32+ caracteres).
   - `VECORION_ORIGENS`: domínio do Netlify, sem `https://` (ex.: `meusite.netlify.app`; vários separados por vírgula).
   - `VECORION_SECURE=1`: cookie só por HTTPS.
   - Opcional: monte um volume em `/data`; sem volume, os projetos somem quando o servidor reinicia.
   - Health check: `/saude`.
2. **Netlify:** edite `netlify.toml` e troque `SEU-CORE.exemplo.com` pela URL do Core. O Netlify publica `interface/` e encaminha `/api/*` ao Core.
3. **Primeiro acesso:** abra uma vez `https://SEU-SITE.netlify.app/api/entrar?t=SEU_TOKEN`. Isso grava o cookie de acesso e leva à interface.
Sem isso a interface cai no modo demonstração (nada é gerado). Dica na própria tela quando o Core responde "não autorizado".
Limites: o Netlify encerra requisições encaminhadas em ~26 s (as do Core são curtas) e não há limite de taxa para tentativas de token, por isso o token deve ser longo.
