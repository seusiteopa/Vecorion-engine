# VECORION ENGINE — Artifact Central
**Versão 0.9 · Etapa 9 — Auditoria Final** · Interface: https://claude.ai/artifact/DsSWej2pMwBZzdPACqkibs

> Este documento reúne a auditoria final **e o histórico completo das Etapas 1 a 8**. Até a Etapa 8 cada publicação substituía a anterior; a auditoria encontrou isso como falha do Bloco 40 e corrigiu consolidando tudo aqui.

## Veredito
**A interface está pronta como demonstração. O produto (Vecorion Engine) não está pronto.** Existe a interface com Core simulado. Não existem Core real, motores de Sites, Imagens e Vídeos, runners, sandbox, banco nem sincronização.

## Checklist obrigatório
| Item | Resultado | Evidência / observação |
|---|---|---|
| Briefing atendido | **Não, parcial** | Interface e modo automático (§34–35) atendidos. Core, motores, pesquisa, validação real e executor seguro (§4–12, 17–19, 32–33, 38) **não construídos** |
| Nada inventado | **Sim, após correção** | Auditoria achou que a estimativa de tempo e memória usava fórmula arbitrária apresentada como dado. Agora rotulada "simulada"; aviso de Core simulado visível em todas as telas de Novo pedido e em Motores |
| Pesquisa usada corretamente | **N/A** | Nenhuma pesquisa externa foi feita (decisão registrada na Etapa 4). Pesquisa técnica (licença do FFmpeg, sandbox, orquestração) segue pendente para o backend |
| Assets com função | Sim | Mapa A01–A15 tem função para todos |
| Assets coerentes / construídos | **Parcial** | Ver tabela de assets abaixo |
| Imagens bem compostas | N/A | O produto não usa imagens |
| Mobile considerado | Sim, **não validado em tela real** | barra inferior, 44 px, área segura, rede reduzida |
| Não parece template genérico | **Parcial** | Ver diferenciação |
| Arquitetura coerente | Sim no papel | Backend não implementado; aprovações da Etapa 6 pendentes |
| Funcionalidades funcionam | **Parcial** | Fluxo do Core simulado passou em teste automatizado (Node). Interface **não foi clicada** em navegador |
| Motion com propósito | Sim | cada animação liga a estado ou feedback |
| Motion não excessivo | Sim por projeto | no máximo uma animação contínua no celular; **não observado em tela** |
| Arte procedural com função | Sim | rede = identidade e atmosfera em Novo pedido; constelação = identificar projeto |
| Arte procedural segue a identidade | Sim | paleta, órbita e Core do logo |
| Fallbacks | Sim | rede vira anéis; logo estático; fonte do sistema; reduced motion |
| Desempenho validado | **Parcial** | Medido: 27,9 KB, sem requisições externas, nenhuma transição em propriedade de layout. **Não medido:** FPS, carga real |
| Reduced motion | Implementado, **não testado em navegador** | atributo `data-motion` + preferência do sistema |
| Acessibilidade validada | **Parcial** | Medido: contraste. Revisado em código: ARIA, teclado, foco, `dialog`. **Sem teste com leitor de tela** |
| SEO | Validado estaticamente | `lang`, `title`, `description`, um `h1` por tela. Sem OG, canonical ou dados estruturados: irrelevante para ferramenta de uso próprio |
| Performance validada | Ver "Desempenho" | idem |
| Segurança considerada | Front-end sim; **backend ausente** | texto do usuário escapado ou `textContent`, sem `eval`, sem URL externa, sem segredo. O sandbox, maior risco do projeto, não existe ainda |
| Artifact atualizado | **Sim, após correção** | consolidado nesta versão |

## Defeitos achados e corrigidos nesta etapa
1. **Incoerência no que eu havia declarado:** o fio animava `height` e o pulso animava `box-shadow`, contra a regra "só transform e opacity". Corrigido para `scaleY` e para um anel com `transform`/`opacity`. Verificado por busca: nenhuma transição em propriedade de layout.
2. **Dado inventado na demonstração:** estimativas e estados de motores pareciam reais. Agora rotulados como simulados.
3. **Aviso de simulação oculto no celular:** existia só na barra lateral. Agora aparece também no conteúdo.
4. **Artifact incompleto:** consolidado.
Verificações novas que passaram: ids duplicados (nenhum), ids do JS inexistentes no HTML (nenhum; os dois apontados são criados nos diálogos), URLs externas (nenhuma), manipuladores inline (nenhum), `eval` (nenhum).

## Assets: previsto × construído
| ID | Asset | Situação |
|---|---|---|
| A01 | Logo | construído, **provisório** (arquivo seu pendente) |
| A02 | Favicon | emoji ∞, **não** o SVG previsto |
| A03 | 28 ícones | **4** ícones de navegação; o resto são glifos de texto |
| A04 | Ícones de motores | **não construídos** (ponto colorido + nome) |
| A05 | Rede do Core | construído |
| A06 | Fio do Core | construído (com recuo na correção) |
| A07, A08 | Marcadores e progresso | construídos |
| A09 | 4 ilustrações de estados vazios | **não construídas** (só texto) |
| A10 | Esqueletos | **não construídos** |
| A11 | Constelação do projeto | construída |
| A12, A13 | Miniatura e player de resultado | não aplicáveis (Core simulado) |
| A14 | Selos de ambiente | **não construídos** (texto) |
| A15 | Faixa de limite | construída em texto |

## Diferenciação (resposta honesta)
**"Parece criado para este projeto?" Em parte.** O fio com ramos por motor e recuo de correção, a rede em torno do Core e as constelações são próprios. A estrutura geral (menu lateral, cartões, formulário) é a de um painel comum. Para ficar claramente próprio faltam: ramo longo com nome do motor, arco de retorno desenhado, ícones próprios de motores e as ilustrações vazias.

## O que falta para "pronto"
1. Abrir no navegador e no celular e conferir logo, rede, fio, tema claro, rolagem e toque.
2. Teste com leitor de tela.
3. Medir FPS e carga.
4. Completar assets A02–A04, A09, A10, A14.
5. **Backend inteiro** (Etapa 6, seção 15) após suas aprovações: Node.js, SQLite local + banco na nuvem, fontes do sistema, `sw.js`, ordem de construção, ambiente de nuvem.
6. Logo definitivo.
7. Pesquisa técnica (licença do FFmpeg, sandbox).

## Registro
| Versão | Mudança |
|---|---|
| 0.8 | Etapa 8 — QA |
| 0.9 | Etapa 9 — Auditoria final. Veredito: interface pronta como demonstração; produto não pronto. Artifact consolidado. Não avançar. |

---
# HISTÓRICO POR ETAPA


<!-- Etapa 1 -->

## Etapa 1
**Versão 0.1 · Etapa 1 — Análise e Estratégia** (sem código)

Legenda: **[C]** confirmada no briefing · **[H]** hipótese criativa/técnica · **[N]** não encontrada / precisa de decisão

---

## 1. Problema e objetivo
- **Problema [C]:** produzir sites, imagens, vídeos, áudio, documentos e arquivos exige que o usuário conheça ferramentas, formatos e etapas.
- **Objetivo [C]:** o usuário descreve o resultado; o Core planeja, pesquisa, coordena motores, valida e entrega.
- **Princípio [C]:** orientado a resultado, não a ferramenta. Nenhum motor depende de uma IA, API, empresa ou biblioteca específica.

## 2. Tipo de produto
**Plataforma / sistema híbrido** (Bloco 4). Não é um site. Tem três camadas:
1. **Interface pública** (campo de pedido, upload, modo Automático/motor específico, status, entrega) — é a única parte que o usuário vê.
2. **Core** (orquestrador invisível).
3. **Motores → módulos → ferramentas.**

## 3. Complexidade
**Muito alta.** Tem planejamento autônomo, pesquisa iterativa, execução de processos, ciclos de correção e vários formatos de saída. A parte visual (interface) é de complexidade baixa a média. A complexidade real está no backend.

## 4. Um único HTML? (Blocos 5 e 6)
- **Interface: sim, pode ser um HTML autocontido [H].**
- **Plataforma inteira: não.** O briefing exige execução de ferramentas (ex.: FFmpeg), sandbox, processos, arquivos temporários e pesquisa web. Isso não roda só no navegador.
- **Arquivos extras justificados** pelo Bloco 6, condição 4 (necessidade técnica real): Core, executor seguro e motores no servidor. A decisão precisa de aprovação sua (condição 3).

## 5. Público e uso
- **Usuário final [C]:** quem quer o resultado sem conhecer o processo.
- **Operador/desenvolvedor [H]:** quem adiciona motores e módulos.
- **Escala [N]:** uso pessoal, interno, de clientes ou SaaS multiusuário? Muda segurança, filas e custo.

## 6. Requisitos extraídos
| Área | Requisito | Fonte |
|---|---|---|
| Core | interpretar, planejar, pesquisar, coordenar, validar, corrigir, consolidar | §4–5 |
| Pesquisa | camada web opcional, iterativa, com seleção de fontes | §6–8, 39 |
| Motores | Sites, Imagens, Vídeos, Áudio, Documentos, Arquivos, Código | §17–27 |
| Colaboração | cadeia e ciclo; tudo passa pelo Core | §9–12, 30 |
| Arquivos | múltiplos uploads; saída de um motor vira entrada de outro | §21–23 |
| Memória | contexto por projeto (arquivos, decisões, erros, versões) | §31 |
| Validação | checagem após etapas e correção automática | §32–33 |
| Segurança | permissões, sandbox, limites, isolamento | §38 |
| Extensibilidade | motor → módulo → ferramenta substituíveis | §16, 28–29 |

## 7. Pesquisa necessária
- **Do próprio briefing:** não precisa de pesquisa externa para entender o objetivo.
- **Pesquisa técnica recomendada para a Etapa 2 [H]:** arquiteturas de orquestração de agentes, filas de jobs, sandbox de execução, licenças de FFmpeg e codecs, e opções de geração de imagem, voz e vídeo sem lock-in.
- Nenhuma pesquisa foi feita nesta etapa. Nada abaixo é fato externo.

## 8. Assets
- **Interface [H]:** logo (infinito com a Terra no círculo direito, já definido por você [C]), paleta, tipografia e ícones por motor. Nenhum asset existe ainda.
- **Origem preferida (Bloco 15):** logo seu, depois arte procedural própria. Dispensa fotografia.
- **Produto gerado:** os assets de cada projeto do usuário são responsabilidade dos motores, não deste projeto visual.

## 9. Motion e arte procedural (só na interface)
- **Oportunidade [H], com propósito:** mostrar que o Core está trabalhando. Um indicador de progresso por etapas (planejando, pesquisando, criando, validando, corrigindo) deixa visível o ciclo que o briefing quer esconder.
- **Arte procedural [H]:** fundo discreto de rede/nós ligados ao Core, sutil, em CSS/SVG. Canvas só se comprovado necessário.
- **Não usar:** WebGL, partículas pesadas, parallax. Não há justificativa.
- `prefers-reduced-motion` obrigatório (Bloco 22).

## 10. Interação
Campo de pedido, upload múltiplo, seletor Automático/motor, status em tempo real, pré-visualização da entrega, histórico de projetos, pedido de esclarecimento quando uma decisão depender do usuário (§5).

## 11. Mobile
Precisa funcionar bem. Upload, status e entrega precisam caber em tela pequena. Efeitos desligados ou simplificados no celular.

## 12. Integrações
**Não nominar tecnologia ainda (Bloco 8).** Necessidades a avaliar: backend de orquestração, armazenamento de arquivos, fila de execução, sandbox, provedores de IA intercambiáveis, busca web. Nenhuma foi escolhida.

## 13. Riscos
1. **Segurança de execução:** é o maior risco. O briefing proíbe execução irrestrita, mas o Core transforma pedidos em comandos. Exige sandbox, allowlist e limites.
2. **Loops de correção sem fim:** o ciclo validar → corrigir precisa de limite de tentativas e custo.
3. **Custo e tempo:** um vídeo de 30 minutos (exemplo do §42) é pesado em processamento e em geração.
4. **Qualidade de planejamento:** o Core "inferir apenas o que for seguro" (§5) é subjetivo. Precisa de critérios.
5. **Licenças:** pesquisa web, imagens encontradas e binários têm restrições (Bloco 15).
6. **Escopo:** sete motores de uma vez é inviável. Falta priorização.
7. **Lock-in disfarçado:** "livre de fornecedor" exige uma camada de abstração desde o início.

## 14. Conflitos e pontos de atenção entre os dois documentos
- O Engine fala em decidir e executar autonomamente. O V2 exige aprovação para criar arquivos extras e um Artifact como memória oficial. **Proposta [H]:** o Artifact é a memória do projeto de construção; a "memória de projeto" do §31 é um recurso do produto final. São coisas diferentes.
- O V2 diz "nunca presumir banco de dados". O §31 exige memória por projeto. A necessidade existe; a tecnologia fica para depois.
- O §41 diz que nenhum motor depende de fornecedor. O Bloco 8 do V2 diz para não nominar tecnologia antes da necessidade. Os dois são compatíveis.

## 15. Diferenciais [H]
- Transparência opcional: usuário vê o plano do Core se quiser, sem ser obrigado.
- Um único pedido cruza site + vídeo + imagem (§20).
- Substituição de ferramentas sem refazer motores.

## 16. Ordem de construção sugerida (do próprio briefing, §43)
Core → entradas/arquivos → planejador → pesquisa → orquestrador de motores → executor seguro → primeiros motores.

## 17. Decisões que dependem de você [N]
1. Quem usará: só você, clientes ou público?
2. Quais **2 ou 3 motores** vêm primeiro?
3. Aprova arquivos separados no backend (item 4)?
4. Onde vai rodar: local, servidor próprio ou nuvem?
5. Há limite de custo por pedido?
6. A pesquisa web exige autorização do usuário em cada pedido (§5 diz "quando autorizado")?

## 18. Registro
| Versão | Mudança |
|---|---|
| 0.1 | Etapa 1 concluída. Sem código. Não avançar sem aprovação. |

---

<!-- Etapa 2 -->

## Etapa 2
**Versão 0.2 · Etapa 2 — Arquitetura do Produto** (sem implementação)

Legenda: **[C]** confirmado por você · **[H]** hipótese/proposta · **[N]** decisão pendente

---

## 0. Decisões aprovadas (Etapa 1)
- **Público [C]:** abrangente e também para uso próprio. Começa como uso próprio, sem multiusuário no início.
- **Primeiros motores [C]:** código de sites, código de imagens, código de vídeo.
- **Arquitetura [C]:** motores independentes e desacoplados; o Core orquestra.
- **Ambiente [C]:** nuvem e local, os dois.
- **Arquivos separados no backend [C]:** aprovado.
- **Interpretação [H]:** "código de imagens/vídeo" = motores que produzem imagem e vídeo *a partir de código* (SVG, HTML/CSS, Canvas, composição programática), não geração por modelo. Modelos de IA entram como recurso opcional por adaptador. **Confirme ou corrija.**

---

## 1. Arquitetura geral

```
INTERFACE (web, responsiva)
   ↓
API DO CORE (único ponto de entrada)
   ↓
CORE
 ├─ Interpretador de pedido
 ├─ Planejador
 ├─ Pesquisa (opcional)
 ├─ Orquestrador (fila + roteamento)
 ├─ Validador / Corretor
 ├─ Memória de projeto
 ├─ Gestor de arquivos
 └─ Política e permissões
   ↓  (contrato único de tarefa)
MOTORES (processos independentes)
 ├─ Motor de Sites
 ├─ Motor de Imagens
 └─ Motor de Vídeos
   ↓
MÓDULOS → ADAPTADORES DE FERRAMENTA
   ↓
EXECUTOR SEGURO (sandbox)
   ↓
ARMAZENAMENTO (local ou nuvem)
```

### Princípios estruturais
1. **Motor = serviço isolado.** Não importa código de outro motor. Fala só com o Core.
2. **Contrato único.** Todo motor expõe as mesmas operações: `descrever` (capacidades), `executar` (tarefa), `validar` (saída), `saúde`. O Core descobre motores por um **registro**, sem conhecê-los de antemão.
3. **Ferramenta atrás de adaptador.** Trocar uma ferramenta não afeta o motor (§16 do briefing).
4. **Runner duplo.** A mesma tarefa roda em `Runner Local` ou `Runner Nuvem`, escolhido por política (custo, peso, privacidade). O motor não sabe onde roda.
5. **Armazenamento abstrato.** Interface única de arquivos com dois backends (disco local e nuvem).
6. **Provedor de IA intercambiável.** Camada única de "capacidades" (texto, imagem, voz). Nenhum motor referencia um fornecedor.
7. **Segurança por padrão.** O Core nunca repassa texto do usuário como comando; gera tarefas tipadas que passam por allowlist.

### Ciclo de vida do pedido
`rascunho → interpretando → aguardando esclarecimento → planejado → executando → validando → corrigindo (limite de N ciclos) → concluído | falhou | cancelado`

---

## 2. Páginas da interface
| Página | Função |
|---|---|
| **Novo pedido** (início) | Campo de texto, anexos, modo Automático ou motor específico, botão executar |
| **Projeto** (workspace) | Abas: **Plano · Execução · Arquivos · Resultado · Versões** |
| **Projetos** | Lista, busca, filtros por status e motor |
| **Motores** | Registro: status, capacidades, módulos, ferramentas, teste de saúde |
| **Configurações** | Ambiente (local/nuvem), provedores, limites, permissões, armazenamento |

## 3. Navegação
Barra lateral no desktop (Novo, Projetos, Motores, Configurações). **Barra inferior** no celular com os mesmos itens. O Projeto abre em tela própria com abas. Retorno sempre visível para o pedido.

## 4. Fluxos principais
1. **Pedido simples:** escreve → Core planeja → executa → entrega.
2. **Pedido com arquivos:** anexa → Core analisa e lista o que encontrou → planeja.
3. **Esclarecimento:** o Core só pergunta quando a decisão depende do usuário (§5). A pergunta aparece no projeto, com opções.
4. **Aprovação do plano [H]:** modo opcional "revisar plano antes de executar". Padrão: automático.
5. **Falha e correção:** erro → diagnóstico → correção → revalidação. Ao atingir o limite, o projeto pede decisão.
6. **Refinamento:** pedir mudança em um resultado gera uma **nova versão**, sem refazer o que não mudou (Bloco 42).
7. **Cruzado:** "site + vídeo de apresentação" gera um projeto com duas tarefas ligadas e um pacote final.

## 5. Funcionalidades
**Core:** interpretar, planejar, rotear, validar, corrigir, memória de projeto, versões, registro de decisões.
**Motor de Sites:** gerar HTML único ou projeto em pastas; pedir imagens ao Core; validar abertura, links e responsividade.
**Motor de Imagens:** SVG/CSS/Canvas → PNG, JPG, WEBP, SVG; lote; variações; otimização.
**Motor de Vídeos:** cenas por código (HTML/Canvas/SVG), roteirização por quadros, renderização, legendas; consome imagens do outro motor.
**Transversais:** upload múltiplo, pacote ZIP, pré-visualização, download, histórico, pesquisa web opcional, limites de custo e tempo.
*(Áudio, Documentos e Arquivos entram depois. O empacotamento ZIP fica como função do Core nesta fase.)*

## 6. Componentes (interface)
Campo de pedido · Zona de upload · Seletor Automático/Motor · Cartão de projeto · Linha do tempo do plano · Cartão de tarefa (com estado) · Painel de pergunta do Core · Visualizador de arquivo (HTML, imagem, vídeo) · Comparador de versões · Cartão de motor · Medidor de custo/tempo · Notificação de estado · Modal de confirmação · Formulário de configuração.

## 7. Estados
- **Projeto:** ciclo da seção 1.
- **Tarefa:** `pendente · em execução · validando · ok · falhou · reexecutando · ignorada`.
- **Motor:** `disponível · ocupado · degradado · offline`.
- **Interface:** vazio, carregando, parcial, erro, offline, sem permissão.
- **Arquivo:** `enviado · analisado · em uso · gerado · descartado`.

## 8. Dados
| Entidade | Campos principais |
|---|---|
| **Projeto** | id, título, status, ambiente, criado, versão atual |
| **Pedido** | texto, anexos, modo, motor escolhido |
| **Plano** | etapas, dependências, motores, justificativas |
| **Tarefa** | motor, módulo, entrada, saída, estado, tentativas |
| **Artefato** | arquivo, tipo, origem (usuário/gerado), versão, hash |
| **Execução** | tarefa, runner, logs, tempo, custo |
| **Validação** | critério, resultado, evidência |
| **Decisão** | o que, por quê, quem (Core/usuário) |
| **Versão** | instantâneo de artefatos e plano |
| **Motor / Módulo / Ferramenta** | registro de capacidades e versão |
| **Provedor** | capacidade, credencial (cofre), limites |
| **Política** | permissões, allowlist, limites |

Uma pessoa só no início, mas todo registro leva `dono` para não exigir reconstrução se virar multiusuário.

## 9. Integrações (necessidades, sem tecnologia nomeada)
Armazenamento de arquivos · fila de tarefas · sandbox de execução · provedor(es) de IA opcionais · busca web opcional · cofre de segredos · ferramenta de renderização de vídeo (adaptador) · sincronização local↔nuvem.
**Segredos nunca no front-end** (Bloco 30).

## 10. Estrutura de arquivos proposta [H]
```
vecorion-engine/
├── interface/          # app web (HTML autocontido por página ou único app)
├── core/
│   ├── api/
│   ├── interpretador/
│   ├── planejador/
│   ├── pesquisa/
│   ├── orquestrador/
│   ├── validador/
│   ├── memoria/
│   ├── arquivos/
│   └── politica/
├── contratos/          # esquemas: tarefa, resultado, capacidade, erro
├── runners/
│   ├── local/
│   └── nuvem/
├── armazenamento/
│   ├── local/
│   └── nuvem/
├── motores/
│   ├── sites/    (modulos/, adaptadores/, motor.manifesto)
│   ├── imagens/  (modulos/, adaptadores/, motor.manifesto)
│   └── videos/   (modulos/, adaptadores/, motor.manifesto)
├── provedores/         # adaptadores de IA/busca
├── sandbox/
├── config/
└── docs/               # Artifact e especificações
```
Cada motor tem um **manifesto** (nome, versão, capacidades, módulos, formatos de entrada e saída). Adicionar um motor = nova pasta + manifesto.

## 11. Comportamento responsivo
- **Celular:** uma coluna; abas do projeto viram seletor no topo; upload por toque; status em cartões compactos; sem comparador lado a lado (alternância).
- **Tablet:** duas colunas (plano + resultado).
- **Desktop:** três áreas: navegação, plano/execução, visualizador.
- Visualizadores (HTML, vídeo) sempre contidos, sem rolagem horizontal da página.

## 12. Oportunidades de interação
Arrastar arquivos · colar imagem · responder pergunta do Core com um toque · aprovar/editar etapa do plano · reexecutar uma tarefa isolada · comparar versões · cancelar a qualquer momento · atalhos de teclado · copiar o link de um resultado.

## 13. Onde motion, efeitos, arte procedural e transições podem existir
| Lugar | O que | Propósito |
|---|---|---|
| Linha do tempo do plano | Avanço de estado, pulso discreto na etapa ativa | Mostrar o que o Core está fazendo |
| Cartão de tarefa | Transição entre estados, feedback de sucesso/erro | Compreensão |
| Ciclo de correção | Seta de retorno animada | Tornar visível o "voltar etapa" |
| Fundo da página Novo pedido | Arte procedural leve (rede de nós ligados ao Core), CSS/SVG | Identidade, ligada ao logo (infinito + Terra) |
| Troca de abas e páginas | Transição curta de opacidade/deslocamento | Continuidade |
| Visualizador de versões | Cruzamento suave entre versões | Comparação |
| Botão executar / upload | Microinterações de hover, foco e arrasto | Feedback |

**Onde NÃO usar:** dentro dos visualizadores de resultado (nada pode competir com o conteúdo gerado), nas listas de logs, em formulários de configuração.
**Regras:** `prefers-reduced-motion` obrigatório; no celular só microinterações e progresso; Canvas/WebGL fora por padrão.

## 14. Riscos revisados
1. **Sandbox** continua sendo o maior risco; precisa existir antes de qualquer motor executar ferramenta.
2. **Runner duplo** dobra a superfície de teste. Mitigação: contrato único e testes idênticos nos dois.
3. **Sincronização local↔nuvem** (arquivos e estado) é complexa. Decidir qual é a fonte de verdade por projeto.
4. **Vídeo por código** é pesado; precisa de limites de duração e resolução na primeira versão.
5. **Escopo de planejamento autônomo:** começar com planos de poucas etapas e catálogo fechado de tipos de tarefa.

## 15. Decisões pendentes [N]
1. Confirma a interpretação de "código de imagens/vídeo" (seção 0)?
2. Fonte de verdade por projeto: nuvem, local, ou escolhida na criação do projeto?
3. Limite inicial de vídeo (duração/resolução)?
4. Modo padrão do plano: automático ou revisar antes de executar?
5. Provedores de IA ficam fora da primeira versão ou entram como opcionais?

## 16. Registro
| Versão | Mudança |
|---|---|
| 0.1 | Etapa 1 — Análise e Estratégia |
| 0.2 | Etapa 2 — Arquitetura do Produto. Sem implementação. Não avançar sem aprovação. |

---

<!-- Etapa 3 -->

## Etapa 3
**Versão 0.3 · Etapa 3 — UX, UI e Design System** (sem código final)

Legenda: **[C]** confirmado por você · **[H]** proposta · **[N]** decisão pendente

---

## 0. Decisões aprovadas até aqui
- **Uso [C]:** próprio e público. Começa como uso próprio.
- **Motores iniciais [C]:** sites, imagens, vídeos, todos baseados em código.
- **Imagens e vídeo [C]:** funcionam internamente com código, bibliotecas e ferramentas do próprio ambiente, sem plataformas nem IA externas.
- **Ambiente [C]:** híbrido nuvem/local. O Core decide respeitando a configuração do projeto.
- **Vídeo [C]:** duração configurável por projeto (mais de 1 hora, sem teto na arquitetura). Limites de segurança configuráveis: tempo de renderização, CPU, memória, tamanho de arquivo, resolução (até 1080p ou 4K).
- **Plano [C]:** automático por padrão; revisão manual opcional.
- **Provedores [C]:** Core e motores modulares, usando recursos disponíveis, sem prender a arquitetura.
- **Nota de coerência [H]:** como imagem e vídeo não usam IA externa, os adaptadores de provedor ficam **opcionais e desligados por padrão**. A tela de Configurações os mostra, mas o produto funciona sem eles.

---

## 1. Jornadas

**J1 — Pedido simples (principal)**
Abre → escreve o resultado → (opcional) anexa arquivos → executa → acompanha o plano → recebe o resultado → baixa ou pede ajuste.
*Emoção desejada:* controle sem esforço.

**J2 — Pedido com pausa e esclarecimento**
Executa → o Core pergunta algo → usuário responde com um toque → continua → entrega.
*Regra:* a pergunta só aparece quando a decisão realmente depende do usuário.

**J3 — Vídeo longo com limites**
Escolhe duração e resolução em "Opções" → o Core mostra estimativa de tempo, recursos e ambiente → confirma → acompanha → recebe.
*Regra:* se o pedido estourar um limite, o Core mostra o que excede e oferece ajustar (resolução, duração, ambiente).

**J4 — Refinar resultado**
Abre o resultado → "Pedir ajuste" → descreve → nova versão (só o que mudou é refeito) → compara versões.

**J5 — Falha**
Erro → o Core mostra o diagnóstico em linguagem simples → corrige sozinho até o limite → se persistir, pede decisão.

---

## 2. Princípios de UX
1. **Uma pergunta por tela:** "O que você quer criar?" domina o início.
2. **Complexidade escondida, nunca bloqueada:** o plano e os logs ficam a um toque, não obrigatórios.
3. **Estado sempre visível:** o usuário nunca fica sem saber o que acontece.
4. **Reversível:** cancelar, reexecutar e voltar versão em qualquer ponto.
5. **Limites explícitos:** custo, tempo e recursos aparecem antes de executar pedidos pesados.

---

## 3. Hierarquia e composição
- **Nível 1:** campo de pedido (Novo pedido) / resultado (Projeto).
- **Nível 2:** estado atual e ação principal.
- **Nível 3:** plano, arquivos, versões.
- **Nível 4:** logs, configurações avançadas, metadados.
- Uma única ação primária por tela.

---

## 4. Wireframes

### 4.1 Novo pedido — Celular
```
┌──────────────────────┐
│ ∞🌍 VECORION    ⚙   │
│                      │
│  O que você quer     │
│  criar?              │
│ ┌──────────────────┐ │
│ │ Descreva o       │ │
│ │ resultado...     │ │
│ │                  │ │
│ └──────────────────┘ │
│ 📎 Anexar  (2)       │
│ [Auto ▾] [Opções ▾]  │
│                      │
│ [    EXECUTAR     ]  │
│                      │
│ Recentes             │
│ ▸ Site solar  ✔      │
│ ▸ Vídeo 30min ⏳     │
├──────────────────────┤
│ ＋Novo  ▤Proj  ◈Mot  │
└──────────────────────┘
```
**Opções (painel recolhível):** ambiente (Automático · Local · Nuvem · Híbrido), plano (Automático · Revisar antes), e, quando o pedido envolver vídeo, duração, resolução e limites.

### 4.2 Novo pedido — Desktop
```
┌────┬─────────────────────────────────────────┐
│ ∞  │            O que você quer criar?       │
│ ＋ │   ┌───────────────────────────────┐     │
│ ▤  │   │ Descreva o resultado...       │     │
│ ◈  │   └───────────────────────────────┘     │
│ ⚙  │   📎 Arraste arquivos   [Auto ▾][Opções]│
│    │            [ EXECUTAR ]                 │
│    │   Recentes: [card] [card] [card]        │
└────┴─────────────────────────────────────────┘
```

### 4.3 Projeto — Celular
```
┌──────────────────────┐
│ ← Vídeo solar  ⋮     │
│ ● Executando 3/7     │
│ ▓▓▓▓▓░░░ 42%         │
│ [Plano|Exec|Arq|Res] │
│ ───────────────────  │
│ ✔ Roteiro            │
│ ✔ Imagens            │
│ ● Montagem (motor    │
│   de vídeo) 2m14s    │
│ ○ Validação          │
│ ○ Entrega            │
│                      │
│ [Pausar] [Cancelar]  │
└──────────────────────┘
```

### 4.4 Projeto — Desktop
```
┌────┬──────────────┬──────────────────────────┐
│nav │ PLANO        │ VISUALIZADOR             │
│    │ ✔ etapa      │  (HTML / imagem / vídeo) │
│    │ ● etapa      │                          │
│    │ ○ etapa      │ [Versões ▾] [Baixar]     │
│    │ Logs ▸       │ [Pedir ajuste]           │
└────┴──────────────┴──────────────────────────┘
```

### 4.5 Pergunta do Core (cartão no projeto)
```
┌──────────────────────────────┐
│ O Core precisa de uma decisão│
│ Qual formato de entrega?     │
│ ( ) MP4 1080p  ( ) MP4 4K    │
│ [Responder]   [Deixar o Core │
│                decidir]      │
└──────────────────────────────┘
```

### 4.6 Motores e Configurações (estrutura)
- **Motores:** lista de cartões (Sites, Imagens, Vídeos) com estado, versão, capacidades e botão "Testar saúde".
- **Configurações:** seções recolhíveis: Ambiente · Limites de recursos · Armazenamento · Permissões · Provedores opcionais · Aparência e acessibilidade.

---

## 5. DESIGN SYSTEM ESTÁTICO

### 5.1 Identidade visual [H]
Tema escuro como padrão (ferramenta técnica de longa permanência), com tema claro equivalente. A cor de acento vem do logo (Terra azul + infinito em ciano-esverdeado). Visual limpo, com bordas finas e muito espaço, sem ornamentos.
**Assinatura:** o "fio do Core": uma linha fina com acento que liga etapas, tarefas e motores, ecoando o infinito do logo.

### 5.2 Cores (tokens) — **[H]; contraste a validar no QA**
| Token | Escuro | Claro | Uso |
|---|---|---|---|
| `bg-0` | #0A0E14 | #F6F8FB | fundo da página |
| `bg-1` | #101722 | #FFFFFF | superfície |
| `bg-2` | #172131 | #EEF2F8 | superfície elevada |
| `border` | #26334A | #D5DDEA | divisórias |
| `text-1` | #E8EEF7 | #0F1A2B | texto principal |
| `text-2` | #9FB0C8 | #4A5B75 | texto secundário |
| `accent` | #3BA7FF | #0B6FD6 | ação primária, foco |
| `accent-2` | #2EE6C5 | #0B8F7A | fio do Core, progresso |
| `success` | #3DDC97 | #12805A | concluído |
| `warning` | #F5B94A | #9A6200 | atenção, limite |
| `danger` | #FF6B6B | #C62F2F | erro |

Regra: estado nunca é só cor; sempre ícone + texto.

### 5.3 Tipografia [H]
- **Títulos:** família geométrica (ex.: Sora), fallback sistema.
- **Texto e UI:** família neutra (ex.: Inter), fallback sistema.
- **Código e logs:** monoespaçada (ex.: JetBrains Mono), fallback sistema.
- **Escala (rem):** 0.75 · 0.875 · 1 · 1.125 · 1.25 · 1.5 · 2 · 2.75
- Corpo mínimo 16 px no celular; linha 1.5; títulos 1.2.
- Fontes web só se carregadas de forma segura; o produto deve permanecer legível sem elas.

### 5.4 Espaçamento, grid, formas
- **Base 4 px:** 4 · 8 · 12 · 16 · 24 · 32 · 48 · 64.
- **Raios:** 6 (campos) · 10 (cartões) · 16 (modais) · 999 (chips).
- **Bordas:** 1 px `border`. Sombras só em elementos flutuantes (menu, modal).
- **Breakpoints:** 360 · 640 · 1024 · 1440. Largura máxima de conteúdo 1200 px.
- **Grid:** 4 colunas (celular), 8 (tablet), 12 (desktop). Margens 16/24/32.
- **Alvo de toque:** mínimo 44 × 44 px.

### 5.5 Componentes e estados

**Botões**
- Primário (preenchido `accent`), secundário (contorno), terciário (texto), destrutivo (`danger`), ícone.
- Estados: normal · hover · foco (anel 2 px `accent` com offset) · pressionado · desabilitado · carregando.
- Um primário por tela.

**Formulários**
- Campo de pedido (área grande, auto-expansível), upload (zona com arrastar), seletor, alternador, campo numérico com unidade (duração, memória, tempo), controle deslizante com valor visível.
- Label sempre visível; ajuda abaixo; erro com ícone + texto + `aria-describedby`.
- Estados: vazio · preenchido · foco · erro · desabilitado · validando.

**Cards**
- **Projeto:** título, motor(es), estado, tempo, miniatura.
- **Tarefa:** ícone do motor, nome, estado, duração, expansível para log.
- **Motor:** nome, versão, capacidades, saúde.
- **Pergunta do Core:** destaque com borda `accent-2`.
- **Resultado:** visualizador + ações.

**Menus**
- Navegação lateral (desktop), barra inferior (celular), menu de contexto (⋮), seletor (Auto/Local/Nuvem/Híbrido).

**Modais e painéis**
- Confirmação de ação destrutiva · aviso de limite excedido · comparador de versões · painel de logs completo.
- Foco preso, `Esc` fecha, retorno do foco ao gatilho. No celular, folha inferior.

**Feedback**
- Toast (sucesso, info), faixa persistente (erro, limite), indicador de progresso (linear com etapas).

**Estados globais:** vazio · carregando (esqueleto) · parcial · erro · offline · sem permissão · motor offline.

### 5.6 Acessibilidade
- Contraste WCAG AA (texto 4.5:1; componentes 3:1), verificado no QA.
- Navegação total por teclado; ordem de foco lógica; atalhos documentados e desativáveis.
- Leitor de tela: `aria-live` educado para mudanças de estado do projeto; títulos hierárquicos; ícones com rótulo.
- Estado sempre por texto + ícone, não só cor ou movimento.
- Progresso exposto como `progressbar` com valor.
- Redução de movimento respeitada em todo o sistema.
- Texto até 200% sem quebra de layout.

### 5.7 Mobile
- Barra inferior com 3 itens; Configurações pelo ícone no topo.
- Abas do projeto rolam horizontalmente com indicador; conteúdo em coluna única.
- Painéis (Opções, logs) abrem como folha inferior.
- Visualizador de vídeo/imagem ocupa a largura, com controles ≥ 44 px.
- Sem comparação lado a lado: alternância com controle deslizante ou toque.
- Motion reduzido ao essencial (seção 6.6).

---

## 6. DESIGN SYSTEM DINÂMICO

### 6.1 Linguagem de motion [H]
**Caráter:** preciso, calmo e mecânico-orgânico. O movimento comunica **trabalho acontecendo** e **continuidade**, nunca espetáculo. Referência conceitual: o "fio do Core" que avança, bifurca ao delegar para um motor e retorna ao Core.

### 6.2 Funções permitidas
Orientar (onde estou) · revelar (o que mudou) · dar feedback (ação recebida) · conectar (Core ↔ motor) · indicar progresso · mostrar o ciclo de correção.
**Proibido:** movimento decorativo sobre conteúdo gerado, loops chamativos, animação que atrase uma ação.

### 6.3 Tokens de motion
| Token | Valor |
|---|---|
| `motion-duration-instant` | 80 ms |
| `motion-duration-fast` | 150 ms |
| `motion-duration-base` | 240 ms |
| `motion-duration-slow` | 400 ms |
| `motion-duration-ambient` | 12–24 s (loop lento) |
| `motion-easing-standard` | cubic-bezier(0.2, 0, 0, 1) |
| `motion-easing-enter` | cubic-bezier(0, 0, 0, 1) |
| `motion-easing-exit` | cubic-bezier(0.3, 0, 1, 1) |
| `motion-easing-linear` | linear (apenas progresso e ambiente) |
| `motion-distance-sm / md` | 4 px / 12 px |
| `motion-scale-press` | 0.97 |
| `motion-scale-enter` | 0.98 → 1 |
| `effect-intensity` | 0 · 1 · 2 (reduzido · normal · rico) |
| `blur-level` | 0 (padrão; blur só em modal/folha) |
| `node-density` | arte ambiente: 0 · 12 · 24 nós |
| `stagger-step` | 40 ms (máx. 6 itens) |

### 6.4 Níveis de movimento (Bloco 25)
| Nível | Usar? | Onde |
|---|---|---|
| **1 Microinteração** | Sim | botões, campos, chips, toggles |
| **2 Componente** | Sim | cartões de tarefa, painéis, modais, toasts |
| **3 Seção/scroll** | Mínimo | transição entre abas e páginas; **sem movimento atrelado ao scroll** |
| **4 Ambiental** | Só em Novo pedido | rede de nós ligada ao Core, em CSS/SVG |
| **5 Cinemático** | **Não** | sem justificativa |

### 6.5 Catálogo de animações
| Elemento | Animação | Duração · easing |
|---|---|---|
| Botão | hover: clareia; pressionado: scale 0.97 | instant · standard |
| Foco | anel aparece | instant · enter |
| Campo de pedido | borda e rótulo ao focar | fast · standard |
| Chip/seletor | troca de seleção deslizante | fast · standard |
| Cartão de tarefa | mudança de estado (cor+ícone cruzam) | base · standard |
| Etapa ativa | pulso discreto no marcador, 2 s | linear loop |
| Fio do Core | segmento avança até a etapa ativa | base · standard |
| Delegação ao motor | fio bifurca para o ícone do motor e volta | slow · standard |
| Ciclo de correção | seta curva retorna à etapa anterior, uma vez | slow · standard |
| Progresso | barra cresce | linear |
| Conclusão | marcador ✔ desenha (traço SVG) | base · enter |
| Erro | leve deslocamento horizontal 4 px, uma vez | fast · standard |
| Pergunta do Core | cartão entra por baixo (12 px + fade) | base · enter |
| Toast | entra e sai (fade + 12 px) | base · enter/exit |
| Modal / folha | fade + escala 0.98→1 / sobe da base | base · enter/exit |
| Troca de aba | fade cruzado, sem deslocamento no celular | fast · standard |
| Troca de página | fade + 12 px | base · standard |
| Versões | cruzamento de opacidade entre resultados | slow · standard |
| Listas | entrada escalonada (stagger) só na primeira carga | base · enter |

### 6.6 Comportamento por dispositivo
- **Desktop:** níveis 1, 2, 3 (leve) e 4.
- **Tablet:** níveis 1, 2, 3; ambiente com metade da densidade.
- **Celular:** níveis 1 e 2; troca de aba só por fade; **sem movimento ambiental**; uma animação contínua no máximo (o pulso da etapa ativa).
- **`prefers-reduced-motion`:** tudo vira troca instantânea ou fade de 80 ms; o pulso e o ambiente são desligados; o progresso permanece (informação essencial), sem animação decorativa.

### 6.7 Arte procedural (única, em Novo pedido) [H]
- **Conceito:** rede de nós finos e linhas que convergem para um ponto central (o Core). Em repouso, quase estática.
- **Parâmetros:** seed fixo (resultado estável), 12–24 nós, opacidade baixa, deriva lenta, resposta discreta ao cursor só no desktop.
- **Tecnologia:** SVG/CSS; Canvas só se o custo de SVG for comprovado.
- **Fallback:** gradiente estático com o símbolo do infinito. **Custo:** mínimo; pausa fora da tela.
- **Não aparece** em Projeto, Motores, Configurações ou sobre visualizadores.

### 6.8 Feedback de limite e recursos
- Antes de executar pedidos pesados: faixa com estimativa de **tempo, CPU, memória, tamanho de arquivo e ambiente** e comparação com os limites do projeto.
- Se exceder: faixa `warning` com o item que excede e três ações (ajustar pedido · mudar ambiente · aumentar limite).
- Sem animação de alerta contínua.

### 6.9 Scroll
- Rolagem nativa, sem scroll-jacking.
- Cabeçalho do projeto e abas ficam fixos, respeitando áreas seguras do celular.
- Lista de logs com rolagem interna e botão "ir ao fim".
- Sem parallax.

---

## 7. Resumo de coerência
- **Estático e dinâmico compartilham tokens**, e a cor de acento e o fio do Core aparecem nos dois.
- O movimento mais rico fica fora do conteúdo gerado.
- A interface funciona sem movimento e sem fontes externas.

## 8. Decisões pendentes [N]
1. Aprova o **tema escuro como padrão**, com claro opcional?
2. Aprova a **paleta** (acento azul da Terra + ciano do infinito)? Posso ajustar depois de ver o logo em arquivo.
3. Aprova as **famílias tipográficas** sugeridas ou prefere outras?
4. Aprova o **"fio do Core"** como assinatura visual?
5. Quer a tela de **Opções** do vídeo com os campos: duração, resolução (1080p / 4K), tempo máx. de renderização, CPU, memória e tamanho máx. de arquivo?

## 9. Registro
| Versão | Mudança |
|---|---|
| 0.1 | Etapa 1 — Análise e Estratégia |
| 0.2 | Etapa 2 — Arquitetura do Produto |
| 0.3 | Etapa 3 — UX, UI e Design System (estático + dinâmico). Sem código. Não avançar sem aprovação. |

---

<!-- Etapa 4 -->

## Etapa 4
**Versão 0.4 · Etapa 4 — Direção de Arte, Pesquisa Visual, Arte Procedural e Assets** (sem código)

Legenda: **[C]** confirmado · **[H]** proposta · **[N]** pendente

---

## 0. Estado e premissas
- Decisões das Etapas 1 e 2 seguem valendo [C].
- **As 5 perguntas da Etapa 3 não foram respondidas.** Adotei **provisoriamente [H]** as propostas: tema escuro padrão com claro opcional, paleta azul + ciano, famílias tipográficas sugeridas, fio do Core como assinatura e opções de vídeo completas. Tudo é reversível; indique o que mudar.
- **Pesquisa visual:** nenhuma pesquisa externa foi feita. O produto é uma ferramenta própria, sem marca ou concorrente a replicar, e a regra do projeto é ter assets internos. A pesquisa aqui é conceitual (referências de linguagem, não de imagens). Nada abaixo é fato externo.
- **Logo [N]:** descrito por você (infinito com a Terra no círculo direito), mas o **arquivo não foi enviado**. Planejei um símbolo provisório em SVG, a ser substituído pelo seu.
- **Regra de origem (Bloco 15):** nenhuma fotografia, nenhum asset externo, nenhuma imagem da internet. Tudo é SVG, CSS ou arte procedural criada para o projeto.

---

## 1. Conceito visual: "Órbita do Core"
Um núcleo que coordena. O Core é o centro; os motores são corpos em órbita que saem, trabalham e voltam. A ideia nasce do seu logo: o **infinito** é o ciclo contínuo (planejar → executar → validar → corrigir) e a **Terra** é o resultado entregue ao mundo.

**Frase-guia:** *"Calmo por fora, orquestrando por dentro."*

## 2. Personalidade
Precisa · confiável · discreta · engenhosa · soberana (um engine próprio, não um intermediário).
**Não é:** futurista de filme, neon, "hacker", fria ao ponto de afastar, nem brinquedo colorido.

## 3. Atmosfera
Noite limpa e profunda. Superfícies azul-acinzentadas escuras, poucos pontos de luz, linhas finas. Muito espaço negativo. A luz (acento) só aparece onde há ação ou atividade.
No tema claro: papel frio, linhas finas, o mesmo acento mais profundo.

## 4. Direção de arte
1. **Linha antes de volume:** linhas de 1 a 1,5 px, sem sombras pesadas, sem 3D.
2. **Luz como informação:** brilho = atividade. Nada brilha só por enfeite.
3. **Geometria circular e orbital:** círculos, arcos e nós ecoam o logo; cantos retos não dominam.
4. **Um acento por vez:** o olhar vai para onde o Core está trabalhando.
5. **Silêncio visual no conteúdo gerado:** a interface se retira para o resultado aparecer.

---

## 5. Paleta (complementa a Etapa 3)
Tokens-base: os da Etapa 3 (`bg-0..2`, `text-1/2`, `accent`, `accent-2`, estados).

**Identidade por motor [H]** (marcador pequeno, sempre com ícone + nome):
| Motor | Cor | Uso |
|---|---|---|
| Sites | `#5AA9FF` | ícone, marcador no fio, chip |
| Imagens | `#B08CFF` | idem |
| Vídeos | `#FF9E5E` | idem |

Regras: cor de motor **nunca** indica estado (estado = cor de estado + ícone + texto). A cor de Vídeos fica próxima ao `warning`; por isso aparece só em marcadores pequenos, e o contraste entre os dois será conferido no QA.
**Gradiente "Terra":** `accent → accent-2`, só no logo e na arte ambiente.

## 6. Tipografia
Mantém a Etapa 3: títulos geométricos, corpo neutro, mono para logs. Acréscimos:
- **Números de tempo e progresso:** figuras tabulares, para não "dançarem".
- **Rótulos de motor e estado:** caixa alta pequena (0.75 rem), espaçamento de letras +4%.
- **Sem texto sobre arte procedural**, exceto o título de Novo pedido, em área de espaço negativo.
- Licenças das fontes: abertas, a confirmar no QA.

## 7. Iconografia
- **Estilo:** traço 1,5 px, grade 24, pontas arredondadas, cantos levemente arredondados, sem preenchimento (preenchido só para estado ativo).
- **Origem:** conjunto próprio em SVG inline (uma folha de símbolos), herdando `currentColor`.
- **Inventário (28):** novo pedido, anexo, executar, pausar, cancelar, reexecutar, projeto, motor, configurações, ambiente local, nuvem, híbrido, plano, log, arquivo, pasta, versão, comparar, download, pergunta do Core, sucesso, erro, aviso, limite, relógio, CPU, memória, fechar.
- **Motores (metáforas):** Sites = janela com colchetes; Imagens = moldura com arco e ponto; Vídeos = quadro com linha de tempo.
- Todo ícone tem rótulo acessível; ícone isolado só com `aria-label`.

## 8. Ilustrações
Só nos **estados vazios** (4 peças), em linha fina e linguagem orbital, SVG, sem personagens:
1. Nenhum projeto ainda (órbita vazia com um ponto).
2. Nenhum arquivo (arco aberto).
3. Motor offline (órbita interrompida).
4. Falha (órbita com um ponto fora do caminho).

## 9. Linguagem fotográfica
**Nenhuma.** O produto não usa fotografia. Justificativa: não agrega função, pesa, exige licença e brigaria com o conteúdo gerado.

## 10. Linguagem de vídeo
- **Na interface:** sem vídeo de fundo, sem vídeo decorativo.
- **Player de resultado:** minimalista, controles de 44 px, linha de tempo fina com marcação das cenas do plano, sem moldura decorativa.
- **Miniaturas de vídeo:** quadro real do resultado (primeiro quadro útil), com selo de duração.
- **Padrão visual dos vídeos gerados pelo motor [H]:** estilo "técnico neutro", configurável por projeto. O Motor de Vídeo recebe do Core um *tema* (cores, tipografia, ritmo) vindo do pedido, não da identidade do Vecorion.

---

## 11. Decisão por elemento visual
| Elemento | Solução | Porquê |
|---|---|---|
| Logo / símbolo | **SVG** (seu arquivo; provisório próprio) | nítido, animável, leve |
| Ícones de interface | **SVG** | consistência, `currentColor` |
| Ícones de motores | **SVG** | idem |
| Fundo de Novo pedido | **Arte procedural (SVG + CSS)** | identidade, custo mínimo |
| Fundo das outras telas | **CSS** (cor chapada) | silêncio visual |
| Fio do Core | **SVG + CSS** (motion graphic) | núcleo da assinatura |
| Marcadores de etapa e estado | **SVG** | rápido, acessível |
| Barra de progresso | **CSS** | simples, performática |
| Estados vazios | **SVG (ilustração)** | pouco peso |
| Esqueletos de carregamento | **CSS** | sem asset |
| Miniatura de projeto sem resultado | **Arte procedural (SVG), seed = id do projeto** | cada projeto único, sem imagem |
| Miniatura de projeto com resultado | **Imagem real do resultado** | informação |
| Visualizador de resultado | **O próprio conteúdo gerado** | a interface se retira |
| Favicon | **SVG** (símbolo simplificado) | leve |
| Efeito de foco/ativo | **CSS** (brilho sutil) | feedback |
| Fotografia, vídeo decorativo, Canvas, WebGL | **Não usar** | sem justificativa |

---

## 12. Arte procedural

### 12.1 "Rede do Core" (fundo de Novo pedido)
| Parâmetro | Definição |
|---|---|
| **Tema** | Rede orbital convergindo para o Core |
| **Clima** | Noite calma, atenta |
| **Paleta** | `bg-0` + linhas em `border` e `accent` de baixa opacidade; um nó central em gradiente Terra |
| **Geometria** | Nós (círculos de 2–4 px), linhas retas finas entre vizinhos, 2 anéis orbitais concêntricos |
| **Iluminação** | Só o nó central emite luz suave; o resto é linha |
| **Textura** | Nenhuma (sem granulação) |
| **Profundidade** | 2 planos: anéis ao fundo (opacidade 6%), rede à frente (opacidade 10–18%) |
| **Densidade** | Desktop 24 nós · tablet 12 · celular 0 (anéis estáticos apenas) |
| **Comportamento** | Em repouso quase estática; nós derivam 2–4 px |
| **Movimento** | Deriva em ciclo de 18–24 s, easing linear; desktop: leve atração ao cursor (máx. 8 px) |
| **Ponto focal** | Nó central, atrás do campo de pedido |
| **Espaço negativo** | Todo o centro-superior fica livre para o título; contraste do texto vem do fundo, não da arte |
| **Seed** | Fixo (resultado estável a cada abertura) |
| **Tecnologia** | SVG + CSS; Canvas só se medições provarem ganho |
| **Fallback** | Gradiente radial estático com os anéis |
| **Custo** | Mínimo; pausa quando a aba ou a tela não está visível |

### 12.2 "Constelação do projeto" (miniatura procedural)
| Parâmetro | Definição |
|---|---|
| **Tema** | Identidade visual única por projeto |
| **Paleta** | Cor do(s) motor(es) do projeto sobre `bg-2` |
| **Geometria** | 5–9 nós ligados em constelação, anel parcial |
| **Densidade** | Baixa; sem animação |
| **Seed** | Derivada do id do projeto |
| **Ponto focal** | Nó maior no terço superior-esquerdo |
| **Espaço negativo** | Margem de 20% |
| **Tecnologia** | SVG estático gerado por regra |
| **Fallback** | Ícone do motor |

---

## 13. Motion graphics (identidade em movimento)

### 13.1 O fio do Core
Linha vertical (celular) ou horizontal (desktop) que percorre as etapas do plano.
- **Avanço:** o segmento preenchido chega à etapa ativa.
- **Delegação:** o fio bifurca para o marcador do motor (com a cor do motor), trabalha e retorna ao Core.
- **Correção:** um arco curvo volta à etapa anterior (representa o ciclo do infinito).
- **Conclusão:** o fio se completa e o marcador final desenha o ✔.

### 13.2 Logo em movimento
Na primeira abertura da sessão: a Terra "acende" e o traço do infinito se desenha uma vez (≤ 900 ms). Não repete ao navegar. Sem animação de logo no celular além do fade.

### 13.3 Ciclo vivo na tela Motores
Cada cartão mostra um micro-arco que gira apenas **enquanto o motor está ocupado**.

---

## 14. Sistema de motion (atualização)
Tokens e níveis da Etapa 3 mantidos. Novos tokens:

| Token | Valor |
|---|---|
| `motion-duration-logo` | 900 ms (uma vez por sessão) |
| `motion-duration-thread` | 240 ms por segmento |
| `motion-duration-branch` | 400 ms |
| `motion-duration-orbit-spin` | 3 s (giro do micro-arco) |
| `effect-glow-active` | brilho de 0 a 8 px em `accent`, opacidade ≤ 35% |
| `node-drift` | 2–4 px · 18–24 s |
| `node-pointer-pull` | ≤ 8 px (só desktop com ponteiro fino) |

### Especificação por movimento
| Movimento | Gatilho | Duração | Easing | Direção | Intensidade | Comportamento | Mobile | Reduced motion |
|---|---|---|---|---|---|---|---|---|
| Rede do Core | carregar Novo pedido | 18–24 s loop | linear | deriva livre | baixa | pausa fora da tela | desligada (anéis estáticos) | desligada |
| Atração ao cursor | movimento do ponteiro | 150 ms | standard | em direção ao cursor | ≤ 8 px | só desktop | desligada | desligada |
| Logo desenha | 1ª abertura da sessão | 900 ms | enter | traço do infinito, depois Terra | média | uma vez | só fade | aparece pronto |
| Avanço do fio | mudança de etapa | 240 ms | standard | segue o sentido do fluxo | média | preenche até a etapa | igual | troca instantânea |
| Delegação ao motor | início de tarefa em motor | 400 ms | standard | bifurca e retorna | média | cor do motor no ramo | ramo curto, sem retorno animado | marcador muda sem trajeto |
| Correção | falha de validação e retry | 400 ms | standard | arco de retorno | média | uma vez por ciclo | só destaque da etapa | destaque estático |
| Pulso da etapa ativa | etapa em execução | 2 s loop | linear | expande e some | baixa | 1 pulso | **única animação contínua permitida** | desligado |
| Giro do micro-arco | motor ocupado | 3 s loop | linear | horário | baixa | só na tela Motores | desligado | desligado |
| Conclusão ✔ | etapa/projeto concluído | 240 ms | enter | traço desenha | média | uma vez | igual | aparece pronto |
| Brilho de foco/ativo | foco ou seleção | 150 ms | standard | — | baixa | halo sutil | igual | sem halo, só anel |

## 15. Efeitos
- **Brilho (glow):** só em foco, seleção e etapa ativa. Nunca em texto.
- **Blur:** zero por padrão. Fundo de modal usa escurecimento sólido, sem blur no celular.
- **Sombra:** só em elementos flutuantes.
- **Granulação, vidro, gradientes de fundo grandes:** não usar.
- Pergunta de controle (Bloco 28): "dá para obter o mesmo com menos?" Sim: a rede procedural pode ser só anéis estáticos. Por isso há fallback.

---

## 16. MAPA DE ASSETS VISUAIS
| ID | Asset | Tela/seção | Função | Tipo e tecnologia | Desktop | Mobile | Motion | Prioridade | Custo | Fallback |
|---|---|---|---|---|---|---|---|---|---|---|
| A01 | Logo Vecorion (infinito + Terra) | cabeçalho, Novo pedido | identidade | SVG | 28 px / grande no início | 24 px | desenho 1× | alta | mínimo | símbolo estático |
| A02 | Favicon | aba | identidade | SVG | 32 px | — | nenhum | média | mínimo | PNG gerado |
| A03 | Conjunto de ícones UI (28) | global | ação e estado | SVG sprite | 20–24 px | 24 px | microinterações | alta | mínimo | rótulo texto |
| A04 | Ícones de motores (3) | Motores, tarefas, chips | identificar motor | SVG | 24 px | 24 px | giro do arco (Motores) | alta | mínimo | inicial do motor |
| A05 | Rede do Core | Novo pedido (fundo) | atmosfera | arte procedural SVG+CSS | 24 nós | anéis estáticos | deriva lenta | média | baixo | gradiente radial |
| A06 | Fio do Core | Projeto, Plano | progresso e fluxo | motion graphic SVG+CSS | horizontal | vertical | avanço, ramo, correção | alta | baixo | lista com marcadores |
| A07 | Marcadores de etapa e estado | Projeto, cartões | estado | SVG | 16–20 px | 20 px | pulso, ✔ | alta | mínimo | texto |
| A08 | Barra de progresso | Projeto | progresso | CSS | 8 px | 8 px | crescimento linear | alta | mínimo | valor numérico |
| A09 | Ilustrações vazias (4) | estados vazios | orientar | SVG | 160 px | 120 px | nenhum | baixa | baixo | ícone + texto |
| A10 | Esqueletos | carregamento | percepção de velocidade | CSS | — | — | brilho lento | média | mínimo | spinner textual |
| A11 | Constelação do projeto | cartão de projeto | miniatura | arte procedural SVG | 96 px | 72 px | nenhum | baixa | baixo | ícone do motor |
| A12 | Miniatura de resultado | cartão, Resultado | pré-visualização | imagem do resultado | 160 px | 120 px | nenhum | média | médio | A11 |
| A13 | Player de resultado | Resultado | assistir | componente + vídeo gerado | grande | largura total | nenhum | alta | do conteúdo | download |
| A14 | Selos de ambiente (local/nuvem/híbrido) | Opções, cartões | contexto | SVG | 16 px | 16 px | nenhum | média | mínimo | texto |
| A15 | Faixa de limite | Opções, Projeto | alertar recursos | CSS + SVG | largura total | largura total | entrada 1× | alta | mínimo | texto |

## 17. INVENTÁRIO DE ASSETS
| ID | Origem | Fonte | Licença/Permissão | Dimensão base | Tratamento | Versão | Status |
|---|---|---|---|---|---|---|---|
| A01 | Fornecido por você (arquivo pendente) / provisório próprio | — | seu / próprio | viewBox 64×32 | monocromático + gradiente Terra | 0.1 | **aguardando arquivo [N]** |
| A02 | Derivado de A01 | — | herdada | 32×32 | símbolo simplificado | 0.1 | a criar |
| A03 | Próprio | criado para o projeto | próprio | grade 24 | traço 1,5 px | 0.1 | a criar |
| A04 | Próprio | idem | próprio | grade 24 | idem | 0.1 | a criar |
| A05 | Procedural | gerado por regra | próprio | viewBox 1440×900 | seed fixo | 0.1 | a criar |
| A06 | Próprio | idem | próprio | adaptável | — | 0.1 | a criar |
| A07 | Próprio | idem | próprio | 20×20 | — | 0.1 | a criar |
| A08 | Próprio | idem | próprio | — | — | 0.1 | a criar |
| A09 | Próprio | idem | próprio | 320×240 | linha | 0.1 | a criar |
| A10 | Próprio | idem | próprio | — | — | 0.1 | a criar |
| A11 | Procedural | idem | próprio | 192×192 | seed = id | 0.1 | a criar |
| A12 | Gerado pelos motores | resultado do usuário | do usuário | variável | corte 16:9 | — | em runtime |
| A13 | Gerado pelos motores | idem | do usuário | variável | — | — | em runtime |
| A14 | Próprio | idem | próprio | 16×16 | — | 0.1 | a criar |
| A15 | Próprio | idem | próprio | — | — | 0.1 | a criar |

**Parâmetros procedurais registrados:** A05 e A11 conforme a seção 12.
**Fontes tipográficas:** externas de licença aberta, a confirmar no QA; o produto funciona com fonte do sistema.

---

## 18. Protocolo anti-template (Bloco 36)
- **O que torna diferente:** o fio do Core, que mostra o ciclo (delegar → voltar → corrigir) como a própria navegação.
- **Assinatura visual:** órbita + fio, derivadas do logo.
- **Assinatura de experiência:** ver o Core trabalhar, sem precisar entender o processo.
- **Interação própria:** a delegação ao motor (ramo do fio) e a atração discreta da rede ao cursor.
- **Linguagem de motion própria:** "mecânico-orgânico, calmo", com ciclos de retorno.
- **Mobile:** o fio vertical e o pulso único mantêm a identidade sem custo.
- **Teste sem logo e nome:** o fio com ramos coloridos por motor e o ciclo de correção continuam únicos. Será revalidado no QA.

## 19. Riscos desta etapa
1. Logo ainda não recebido: todo o símbolo depende dele.
2. Cores de motor perto de cores de estado: depende de QA de contraste.
3. A rede procedural pode ser percebida como "clichê de tecnologia" se for densa: mantida baixa de propósito.

## 20. Pendências [N]
1. **Envie o arquivo do logo** (SVG ou PNG), ou aprova o símbolo provisório?
2. Aprova as cores de identidade dos motores (azul, violeta, laranja)?
3. Confirma as 5 pendências da Etapa 3, ou segue com as propostas?
4. Aprova **nenhuma fotografia** no produto?
5. O "estilo técnico neutro" é um bom padrão para os vídeos gerados?

## 21. Registro
| Versão | Mudança |
|---|---|
| 0.1 | Etapa 1 |
| 0.2 | Etapa 2 |
| 0.3 | Etapa 3 |
| 0.4 | Etapa 4 — direção de arte, arte procedural, motion graphics, mapa e inventário de assets. Sem código. Não avançar sem aprovação. |

---

<!-- Etapa 5 -->

## Etapa 5
**Versão 0.5 · Etapa 5 — Copywriting, Conteúdo e Microcopy** (sem código)

Legenda: **[C]** confirmado · **[H]** proposta · **[N]** pendente · `{variável}` = valor preenchido pelo sistema

---

## 0. Premissas
- Idioma: **português do Brasil** [H]. Textos prontos para serem trocados depois por outro idioma (cada texto tem um identificador lógico, definido na implementação).
- **Logo:** sem arquivo recebido; segue o símbolo provisório (infinito com a Terra no círculo direito), a ser substituído pelo seu [N].
- Etapas 3 e 4 seguem com as propostas provisórias.
- **Nada inventado:** sem depoimentos, números, clientes, prêmios ou promessas que o briefing não sustente. Onde o texto promete algo (ex.: "confere antes de entregar"), a promessa vem do briefing (§32–33). Comportamentos citados nos textos estão marcados **[confirmar]** quando ainda não foram decididos.

---

## 1. Voz e tom
**Calma, precisa e direta.** Fala como um bom coordenador de produção: diz o que está acontecendo, o que precisa de você e o que vem a seguir.

**Faz:** frases curtas · verbos de ação · "você" · número e unidade quando há estimativa · causa + próximo passo em todo erro.
**Não faz:** exclamação · emoji · "Ops!" · humor em erro · culpar o usuário · jargão técnico em mensagens de estado · promessas vagas ("incrível", "revolucionário").

**Regra de nomes:** nas telas de pedido e progresso, descreve a ação ("Criando imagens"). O nome do motor ("Motor de Imagens") só aparece em Motores, nos detalhes da tarefa e nos logs.

---

## 2. Mensagem central
**Descreva o resultado. O Core cuida do caminho.**

Sustentação (uma frase): *Você diz o que quer criar. O Vecorion planeja, produz, confere e entrega.*

**Opções de tagline (escolha uma) [N]:**
1. Do pedido ao resultado.
2. Você define o objetivo. O Core encontra o caminho.
3. Um núcleo. Vários motores. Um resultado.

---

## 3. Novo pedido (tela inicial)
| Elemento | Desktop | Celular |
|---|---|---|
| Título | O que você quer criar? | O que você quer criar? |
| Subtítulo | Descreva o resultado. O Core decide como chegar lá. | Descreva o resultado. O Core faz o resto. |
| Placeholder (rotativo) | Um site para minha empresa · Um vídeo de 30 minutos sobre energia solar · Imagens para uma campanha, com esta identidade | Um site para minha empresa · Um vídeo sobre energia solar · Imagens para uma campanha |
| Anexar | Arraste arquivos aqui ou escolha do computador | Anexar arquivos |
| Chip de anexos | {n} arquivo(s) anexado(s) | {n} anexo(s) |
| Seletor de modo | Automático · Sites · Imagens · Vídeos | Automático · Sites · Imagens · Vídeos |
| Opções | Opções do pedido | Opções |
| CTA primário | Executar | Executar |
| CTA com revisão ativa | Gerar plano | Gerar plano |
| Rodapé do campo | O Core pergunta só quando precisar de uma decisão sua. | O Core pergunta só se precisar. |
| Recentes | Projetos recentes | Recentes |

**Motion dependente de conteúdo:** o placeholder troca a cada 6 s com fade de 150 ms e para ao focar o campo. Com movimento reduzido, mostra só o primeiro exemplo, fixo.

---

## 4. Como funciona (bloco de apresentação, ao lado ou abaixo de Novo pedido no primeiro uso)
**Título:** Do pedido à entrega, em quatro passos.
1. **Você descreve.** Um pedido curto basta. Anexe arquivos se quiser usar os seus.
2. **O Core planeja.** Entende o objetivo, pesquisa quando for necessário e escolhe como produzir.
3. **Os motores criam.** Sites, imagens e vídeos são produzidos em conjunto, cada um no que faz melhor.
4. **O Core confere e entrega.** Se algo falha, ele corrige antes de mostrar o resultado.

## 5. Benefícios
| Título | Texto |
|---|---|
| Sem etapas para aprender | Você descreve o resultado. Quem escolhe ferramentas e formatos é o Core. |
| Confere antes de entregar | Cada etapa importante é validada. Se algo falha, o Core corrige e tenta de novo. |
| Roda onde você preferir | Local, na nuvem ou nos dois. O Core respeita a configuração de cada projeto. |
| Você mantém o controle | Plano automático por padrão. Se quiser, revise e aprove antes de começar. |
| Cresce com você | Os motores são independentes. Novos motores entram sem refazer o que já existe. |

## 6. Diferenciais (para a tela Motores e a página "Sobre")
- **Um núcleo, vários motores.** O Core coordena; cada motor trabalha de forma independente.
- **Motores colaborativos.** O vídeo pede imagens ao Motor de Imagens, sem você intermediar.
- **Ferramentas, não amarras.** Nenhuma ferramenta, biblioteca ou serviço é obrigatório. Dá para trocar sem refazer o motor.
- **Produção no seu ambiente.** Imagens e vídeos são gerados com código e ferramentas do próprio ambiente. Provedores externos são opcionais e ficam desligados por padrão.
- **Limites claros.** Duração, resolução, tempo, CPU, memória e tamanho de arquivo são configuráveis por projeto.

---

## 7. Navegação
| Item | Desktop | Celular (barra inferior) |
|---|---|---|
| Novo pedido | Novo pedido | Novo |
| Projetos | Projetos | Projetos |
| Motores | Motores | Motores |
| Configurações | Configurações | ⚙ (rótulo: "Configurações") |
| Abas do projeto | Plano · Execução · Arquivos · Resultado · Versões | Plano · Execução · Arquivos · Resultado · Versões |
| Voltar | Voltar para projetos | Voltar |

---

## 8. Estados e textos de progresso
**Projeto:**
| Estado | Texto de estado | Texto lido pelo leitor de tela (aria-live) |
|---|---|---|
| Rascunho | Rascunho | Rascunho salvo |
| Interpretando | Entendendo seu pedido | O Core está entendendo seu pedido |
| Aguardando esclarecimento | Precisamos de uma decisão sua | O Core precisa de uma decisão sua |
| Planejado | Plano pronto | Plano pronto, {n} etapas |
| Executando | Em execução, etapa {x} de {n} | Executando etapa {x} de {n}: {nome da etapa} |
| Validando | Conferindo o resultado | Conferindo o resultado |
| Corrigindo | Corrigindo e tentando de novo | Corrigindo: {motivo curto} |
| Concluído | Concluído | Projeto concluído |
| Falhou | Não foi possível concluir | Não foi possível concluir. Há uma ação disponível. |
| Cancelado | Cancelado | Projeto cancelado |

**Tarefa:** Pendente · Em execução · Conferindo · Concluída · Falhou · Tentando de novo · Ignorada.
**Motor:** Disponível · Ocupado · Funcionando com limitações · Offline.
**Arquivo:** Enviado · Analisado · Em uso · Gerado · Descartado.

**Nomes de etapa (exemplos de plano, ação em vez de motor):**
Entender o pedido · Pesquisar informações · Escrever o roteiro · Criar as imagens · Gravar a narração *(só se houver motor de áudio)* · Montar o vídeo · Montar o site · Conferir o resultado · Preparar a entrega.

**Motion dependente de conteúdo:** quando o fio do Core bifurca para um motor, o nome da etapa muda em fade de 150 ms. O texto muda **junto** com o fio, nunca antes. Com movimento reduzido, o texto muda sem transição.

**Mensagens de contexto no cartão de tarefa:**
- Em execução: "Em andamento há {tempo}."
- Aguardando recurso: "Aguardando {imagens} do outro motor."
- Retentativa: "Tentativa {n} de {máx.}."

---

## 9. Pergunta do Core
**Título:** O Core precisa de uma decisão sua
**Corpo:** {pergunta objetiva, 1 frase}
**Ações:** Responder · Deixar o Core decidir
**Rodapé:** Sem sua resposta, o projeto fica em pausa.
**Aviso de atraso (após {X} min) [confirmar]:** Este projeto está esperando por você desde {hora}.

---

## 10. Opções do pedido (formulário)
| Campo | Rótulo | Ajuda | Opções |
|---|---|---|---|
| Ambiente | Onde executar | O Core escolhe conforme o projeto, a menos que você defina. | Automático · Local · Nuvem · Híbrido |
| — | Automático | O Core escolhe o melhor lugar para cada etapa. | |
| — | Local | Usa só este computador. | |
| — | Nuvem | Usa só o ambiente na nuvem. | |
| — | Híbrido | Divide o trabalho entre os dois. | |
| Plano | Como conduzir | Automático executa do início ao fim. | Automático · Revisar antes |
| Pesquisa | Pesquisar na web | Só quando o Core precisar de informação que você não forneceu. | Ligado · Desligado |
| Duração (vídeo) | Duração | Sem limite fixo. O limite real depende dos recursos disponíveis. | número + unidade |
| Resolução | Resolução | Resoluções maiores exigem mais tempo e memória. | 1080p · 4K |
| Tempo máx. | Tempo máximo de renderização | O Core interrompe e avisa se passar disso. | número + unidade |
| CPU | Uso máximo de CPU | Protege o computador de travar. | % |
| Memória | Uso máximo de memória | | número + unidade |
| Arquivo | Tamanho máximo do arquivo | | número + unidade |
| Rodapé | — | O Core respeita estes limites e avisa antes de passar deles. | |

**Botões:** Salvar como padrão deste projeto · Restaurar padrões · Fechar.

### Estimativa antes de executar (vídeos e pedidos pesados)
> Estimativa: cerca de {tempo} de renderização, até {memória} de memória e arquivo de até {tamanho}. Ambiente: {ambiente}.

**Dentro dos limites:** "Dentro dos limites do projeto." [ícone de sucesso]
**Fora do limite:**
> Este pedido passa do limite de {item}: precisa de {valor}, e o limite é {limite}.
> **Ações:** Ajustar o pedido · Mudar de ambiente · Aumentar o limite

---

## 11. CTAs (catálogo)
**Principais:** Executar · Gerar plano · Aprovar e executar · Responder
**Secundários:** Anexar arquivos · Ver plano · Ver logs · Comparar versões · Baixar · Baixar tudo (ZIP)
**Controle:** Pausar · Retomar · Cancelar · Reexecutar esta etapa · Tentar de novo
**Refino:** Pedir ajuste · Criar nova versão · Voltar para a versão {n}
**Limites:** Ajustar o pedido · Mudar de ambiente · Aumentar o limite
**Motores:** Testar funcionamento · Ver capacidades
**Configurações:** Salvar · Restaurar padrões

**Pedir ajuste (campo):** título "O que você quer mudar?" · placeholder "Ex.: deixe a narração mais lenta e troque a abertura" · ajuda "Só o que mudou será refeito." **[confirmar o comportamento]** · botão "Criar nova versão".

---

## 12. Erros
**Estrutura:** o que aconteceu + causa (se conhecida) + o que fazer. Nunca só "Erro".

| Situação | Mensagem | Ação |
|---|---|---|
| Pedido vazio | Descreva o que você quer criar para continuar. | Escrever pedido |
| Arquivo grande demais | "{nome}" tem {tamanho}, e o máximo é {limite}. | Escolher outro arquivo |
| Formato não suportado | "{nome}" está em um formato que ainda não é suportado. | Ver formatos aceitos |
| Falha no envio | Não conseguimos enviar "{nome}". Verifique a conexão e tente de novo. | Tentar de novo |
| Limite excedido | (ver seção 10) | Ajustar · Mudar ambiente · Aumentar limite |
| Motor offline | O motor de {função} está fora do ar. As etapas que dependem dele estão em pausa. | Testar funcionamento · Tentar outro ambiente |
| Etapa falhou | A etapa "{nome}" falhou: {causa curta}. O Core está corrigindo. | Ver detalhes |
| Correção esgotada | O Core tentou corrigir {n} vezes e ainda não chegou ao resultado esperado. | Ajustar o pedido · Tentar de novo |
| Tempo de renderização excedido | A renderização passou do tempo máximo de {limite} e foi interrompida. | Aumentar o limite · Reduzir o pedido |
| Sem permissão | Este projeto não tem permissão para {ação}. | Abrir permissões |
| Conexão perdida | Sem conexão. O que já foi feito está salvo. **[confirmar]** | Tentar de novo |
| Ambiente indisponível | O ambiente {local/nuvem} não está acessível agora. | Mudar de ambiente |
| Erro inesperado | Algo saiu do previsto. O projeto não foi perdido. **[confirmar]** | Tentar de novo · Ver detalhes |

**Detalhes técnicos:** painel recolhível "Detalhes" (códigos e logs), fechado por padrão.

---

## 13. Sucesso e confirmações
| Momento | Texto |
|---|---|
| Pedido recebido | Pedido recebido. O Core está planejando. |
| Plano aprovado | Plano aprovado. Execução iniciada. |
| Etapa concluída (toast) | "{etapa}" concluída. |
| Projeto concluído | Pronto. Seu {site/vídeo/imagem} está concluído. |
| Nova versão | Versão {n} criada. Só o que mudou foi refeito. **[confirmar]** |
| Download | Arquivo preparado para download. |
| Configuração salva | Configuração salva. |
| Teste de motor | O motor de {função} está funcionando. |
| Dentro dos limites | Dentro dos limites do projeto. |

### Confirmações destrutivas
- **Cancelar projeto:** "Cancelar este projeto? O que já foi gerado fica salvo em Arquivos. **[confirmar]**" · Cancelar projeto · Continuar
- **Excluir projeto:** "Excluir este projeto? Esta ação não pode ser desfeita." · Excluir · Manter
- **Restaurar padrões:** "Restaurar os padrões? Suas configurações atuais serão substituídas." · Restaurar · Manter

---

## 14. Estados vazios e carregamento
| Local | Título | Texto | Ação |
|---|---|---|---|
| Sem projetos | Nenhum projeto ainda | Descreva o que você quer criar e o primeiro aparece aqui. | Novo pedido |
| Sem arquivos | Nenhum arquivo por aqui | Os arquivos enviados e os gerados aparecem neste lugar. | Anexar arquivos |
| Motor offline | Motor fora do ar | As etapas que dependem dele ficam em pausa. | Testar funcionamento |
| Falha | Não foi possível concluir | Veja o que aconteceu e como seguir. | Ver detalhes |
| Sem resultado ainda | O resultado aparece aqui | Assim que o Core entregar, você poderá ver, baixar e pedir ajustes. | — |
| Sem versões | Uma versão por enquanto | Cada ajuste pedido cria uma nova versão. | — |
| Busca sem resultado | Nada encontrado | Tente outro termo ou limpe os filtros. | Limpar filtros |

**Carregando:** Carregando projetos · Preparando o resultado · Abrindo visualizador.

---

## 15. Tela Motores e Configurações
**Motores — título:** Motores
**Subtítulo:** Cada motor trabalha de forma independente. O Core coordena todos.
**Cartões:**
| Motor | Descrição curta |
|---|---|
| Sites | Cria sites, de uma página única a projetos completos. |
| Imagens | Cria e processa imagens a partir de código. |
| Vídeos | Monta vídeos de qualquer duração, dentro dos limites do projeto. |

*(Descrições devem ser conferidas com as capacidades reais na implementação.)*
**Campos do cartão:** Estado · Versão · Capacidades · Último teste · Botão "Testar funcionamento".

**Configurações — seções:** Ambiente · Limites de recursos · Armazenamento · Permissões · Provedores opcionais · Aparência e acessibilidade.
**Provedores opcionais — introdução:** "Serviços externos são opcionais. Todos os motores funcionam sem eles."
**Aparência e acessibilidade:** Tema (Escuro · Claro · Sistema) · Reduzir movimento (Seguir o sistema · Sempre reduzir).

---

## 16. FAQ
**O que é o Vecorion Engine?**
Uma plataforma que cria sites, imagens e vídeos a partir de uma descrição sua. Você diz o resultado. O Core planeja, coordena os motores, confere e entrega.

**Preciso escolher um motor?**
Não. No modo Automático, o Core escolhe. Você pode escolher um motor específico quando quiser.

**O que é o Core?**
É a parte que entende o pedido, monta o plano, coordena os motores, valida e corrige. Você não precisa vê-la, mas pode abrir o plano a qualquer momento.

**Posso revisar o plano antes de começar?**
Sim. Em Opções, escolha "Revisar antes". Por padrão, o plano roda sozinho.

**Quanto tempo pode durar um vídeo?**
A duração é configurável por projeto e não tem limite fixo. O limite real vem dos recursos disponíveis e dos limites que você define. O Core mostra uma estimativa antes de executar.

**Meus pedidos usam inteligência artificial externa?**
Imagens e vídeos são produzidos com código e ferramentas do próprio ambiente. Serviços externos são opcionais e ficam desligados por padrão.

**Onde meus arquivos ficam?**
No ambiente do projeto: local, na nuvem ou nos dois, conforme a configuração. **[confirmar detalhes de armazenamento]**

**O Core pesquisa na internet?**
Só quando precisa de informação que você não deu e a pesquisa está ligada no projeto.

**O que acontece se algo der errado?**
O Core diagnostica, corrige e confere de novo. Se não conseguir, mostra o que aconteceu e pede sua decisão.

**Posso pedir mudanças depois de pronto?**
Sim. "Pedir ajuste" cria uma nova versão e mantém as anteriores.

**Dá para adicionar novos motores?**
A arquitetura foi feita para isso: novos motores entram sem refazer os existentes.

---

## 17. Microcopy
**Tooltips:** Anexar arquivos · Pausar execução · Reexecutar esta etapa · Comparar versões · Testar funcionamento · Abrir logs · Copiar link.
**Rótulos de ícone (acessibilidade):** "Abrir configurações" · "Fechar painel" · "Mais ações".
**Seletor de modo — ajuda:** "Automático deixa o Core escolher o motor."
**Campo de pedido — contador (se houver limite) [confirmar]:** {n} de {máx.} caracteres.
**Atalhos (documentados, desativáveis):** Enviar pedido: Ctrl/Cmd + Enter.
**Aviso de saída com pedido não enviado:** "Você tem um pedido não enviado. Sair mesmo assim?" · Sair · Ficar
**Offline:** "Você está offline. Pedidos serão enviados quando a conexão voltar." **[confirmar comportamento]**
**Primeiro uso (dica única):** "Dica: anexe arquivos para o Core usar o que você já tem."

---

## 18. Textos mobile (resumo das variações)
| Contexto | Desktop | Celular |
|---|---|---|
| Subtítulo inicial | Descreva o resultado. O Core decide como chegar lá. | Descreva o resultado. O Core faz o resto. |
| Estado de execução | Em execução, etapa {x} de {n} | Etapa {x} de {n} |
| Pergunta do Core | O Core precisa de uma decisão sua | Decisão necessária |
| Limite excedido | Este pedido passa do limite de {item}: precisa de {valor}, e o limite é {limite}. | Passa do limite de {item}: {valor} (limite {limite}). |
| Estimativa | Estimativa: cerca de {tempo} de renderização, até {memória}… | ~{tempo} · {memória} · {tamanho} |
| Concluído (toast) | Pronto. Seu {tipo} está concluído. | {Tipo} concluído. |
| Botão de ajuste | Pedir ajuste | Ajustar |

Regra: nenhum texto de ação truncado; se não couber, o rótulo curto substitui o longo. Títulos em até 2 linhas.

---

## 19. Conteúdo do ciclo de correção (acompanha o movimento)
O arco de retorno do fio (Etapa 4) acompanha estes textos:
- "Encontramos um problema em {etapa}. Corrigindo."
- "Tentativa {n} de {máx.}."
- "Corrigido. Conferindo de novo."
Sem animação de alerta; o texto é a informação principal, o arco é reforço.

---

## 20. Pendências [N]
1. Escolher a **tagline** (seção 2).
2. Aprovar a **voz** (calma, direta, sem exclamação).
3. Confirmar o idioma único (pt-BR) por enquanto.
4. Os itens marcados **[confirmar]** são comportamentos de produto ainda não definidos (cancelar mantém arquivos, nova versão refaz só o que mudou, salvamento offline, limite de caracteres). Defina na Etapa 6 ou antes.
5. Arquivo do logo (ainda pendente desde a Etapa 4).

## 21. Registro
| Versão | Mudança |
|---|---|
| 0.4 | Etapa 4 — Direção de arte e assets |
| 0.5 | Etapa 5 — Copy, conteúdo e microcopy. Sem código. Não avançar sem aprovação. |

---

<!-- Etapa 6 -->

## Etapa 6
**Versão 0.6 · Etapa 6 — Preparação Técnica para Construção** (nada implementado)

Legenda: **[C]** confirmado · **[H]** proposta técnica · **[N]** pendente

---

## 0. Decisões fechadas (Etapa 5)
- **Tagline [C]:** "Do pedido ao resultado."
- **Voz [C]:** aprovada. **Idioma [C]:** só português do Brasil por enquanto.
- **Regra 1 [C]:** cancelar interrompe a execução e **preserva os arquivos já gerados**, salvo se o usuário pedir para apagar.
- **Regra 2 [C]:** ajuste refaz **só as etapas afetadas**, reaproveitando o que ainda vale.
- **Regra 3 [C]:** pedidos offline ficam em **fila local** e sincronizam quando a conexão volta.
- Os marcadores [confirmar] dessas três regras foram removidos (ver seção 14).
- Etapas 3 e 4 seguem com as propostas provisórias; o logo segue provisório em SVG.

---

## 1. Decisão-mestra: o que fica em um único HTML
**«MANTER EM UM ÚNICO HTML» → vale para a interface. [H]**

| Parte | Formato | Justificativa |
|---|---|---|
| **Interface** (5 telas) | **1 arquivo `index.html`** autocontido (HTML + CSS + JS + SVG inline) | Cabe: é uma aplicação de formulários, listas e visualização. Sem framework, sem build, sem requisições externas |
| **Funcionamento offline** | **+ `sw.js`** (1 arquivo) | A fila offline (Regra 3) e a abertura sem rede exigem service worker. É necessidade técnica real (Bloco 6, condição 4) |
| **Core, motores, runners, sandbox** | Projeto de backend em pastas | Executam ferramentas, processos e arquivos; não rodam no navegador (aprovado na Etapa 2) |

**Total para a interface: 2 arquivos.** Nenhum CSS ou JS separado.

---

## 2. Interface — escolhas técnicas

### 2.1 HTML
- Semântico: `header`, `nav`, `main`, `section`, `dialog` (nativo, para modais), `details` (logs e detalhes), `progress`/`role=progressbar`.
- Uma única página com **5 visões** (Novo pedido, Projetos, Projeto, Motores, Configurações) trocadas por **rota via hash** (`#/projetos/{id}`). Dá botão voltar funcional sem servidor de rotas.
- Um `<template>` por componente repetido (cartão de projeto, tarefa, motor, toast).
- Região `aria-live="polite"` única para os textos de estado (Etapa 5, seção 8).

### 2.2 CSS
- **Variáveis CSS** para todos os tokens (Etapas 3 e 4): cores, espaçamento, raios, durações, easings, intensidade de efeito.
- Tema por atributo: `data-theme="dark|light"`; padrão pelo sistema (`prefers-color-scheme`) com escolha salva.
- Movimento por atributo: `data-motion="full|reduced"`, definido pelo sistema (`prefers-reduced-motion`) ou pela configuração.
- Layout com **grid e flexbox**, unidades relativas, `clamp()` na tipografia. Breakpoints: 640 · 1024 · 1440.
- Áreas seguras do celular: `env(safe-area-inset-*)`.
- **Fontes:** pilha do sistema na v1 [H] (mantém o produto autossuficiente, sem requisição externa). As famílias da Etapa 3 ficam como melhoria opcional trocável por uma variável.

### 2.3 JavaScript (sem framework, sem biblioteca) [H]
Justificativa: a interface tem poucas visões e atualização por eventos. Framework adicionaria peso, build e dependência, contra o Bloco 19 e o Bloco 39.

Módulos internos (organizados por seção do script, no mesmo arquivo):
| Módulo | Função |
|---|---|
| `store` | Estado único da aplicação + assinatura de mudanças |
| `router` | Rotas por hash |
| `api` | Cliente HTTP do Core, com erros padronizados |
| `eventos` | Canal de eventos em tempo real (SSE) com reconexão |
| `fila-offline` | Fila local de pedidos (IndexedDB) e sincronização |
| `ui` | Funções de renderização e componentes |
| `motion` | Liga/desliga movimento, pausa fora da tela |
| `procedural` | Gerador de SVG por seed (rede do Core e constelações) |
| `a11y` | Foco, anúncios, atalhos |
| `config` | Tema, movimento, ambiente, limites |

### 2.4 SVG
- **Folha de símbolos inline** (`<symbol>`) com os 28 ícones, 3 ícones de motores, logo, 4 ilustrações vazias (Etapa 4).
- Estilo por `currentColor` e variáveis; sem imagem externa.

### 2.5 Canvas e WebGL
**Não usar.** SVG + CSS entregam todos os efeitos definidos. Só reavaliar se uma medição provar ganho.

---

## 3. Efeitos importantes: tecnologia, custo, fallback, mobile, acessibilidade, movimento reduzido
| Efeito | Tecnologia | Custo | Fallback | Mobile | Acessibilidade | Movimento reduzido |
|---|---|---|---|---|---|---|
| **Rede do Core** (A05) | SVG gerado 1× por JS (seed fixo) + CSS `transform` nos grupos | Baixo (≤ 40 elementos) | Gradiente radial estático com anéis | Só anéis estáticos, sem deriva | `aria-hidden`, sem foco, sem texto | Desligado (estático) |
| **Atração ao cursor** | JS `pointermove` + `requestAnimationFrame`, desktop com ponteiro fino | Baixo; limitado a 30 quadros/s | Sem efeito | Desligado | Decorativo | Desligado |
| **Logo desenhado** (A01) | CSS `stroke-dashoffset` | Mínimo, 1× por sessão | Logo estático | Só fade | `role=img` + rótulo | Logo pronto |
| **Fio do Core** (A06) | SVG + classes CSS alternadas por JS; `stroke-dasharray` | Baixo | Lista com marcadores | Fio vertical, ramo curto | O estado real está no **texto** e no `aria-live`; o fio é reforço | Troca instantânea |
| **Ramo ao motor** | CSS (caminho curto + cor do motor) | Baixo | Marcador do motor muda | Sem retorno animado | Texto da etapa muda junto | Marcador muda sem trajeto |
| **Arco de correção** | SVG + CSS, 1 vez por ciclo | Baixo | Destaque estático da etapa | Só destaque | Texto "Corrigindo" anunciado | Destaque estático |
| **Pulso da etapa ativa** | CSS `opacity`/`transform`, 2 s | Mínimo | Marcador cheio | **Única animação contínua** | Decorativo | Desligado |
| **Giro do micro-arco** (Motores) | CSS `transform: rotate` | Mínimo | Ícone de "ocupado" estático | Desligado | Estado em texto | Desligado |
| **Progresso** | CSS `transform: scaleX` | Mínimo | Valor numérico | Igual | `progressbar` com valor | Mantém (informação essencial), sem animação decorativa |
| **Conclusão ✔** | SVG traço, CSS | Mínimo | Ícone pronto | Igual | Texto "Concluído" | Pronto |
| **Troca de abas/páginas** | CSS fade (classe), sem View Transitions | Mínimo | Troca imediata | Só fade | Foco movido para o título da visão | Troca imediata |
| **Foco/seleção (glow)** | CSS `box-shadow` com transição | Mínimo | Anel de foco | Igual | Anel visível sempre | Só anel, sem halo |
| **Toasts e modais** | CSS + `<dialog>` | Mínimo | — | Folha inferior | Foco preso, `Esc`, retorno de foco | Sem transição |
| **Esqueletos** | CSS gradiente deslizante | Mínimo | Bloco estático | Igual | `aria-busy` | Estático |
| **Constelação do projeto** (A11) | JS gera SVG por seed (gerador pseudoaleatório determinístico) | Baixo, gerado 1× e guardado | Ícone do motor | Igual | Decorativo | Já estático |
| **Placeholder rotativo** | JS + CSS fade, 6 s | Mínimo | Primeiro exemplo fixo | Igual | Não é anunciado (é placeholder) | Fixo |

### Regras de desempenho
- Animar **só `transform` e `opacity`**.
- Sem `blur`/`backdrop-filter`; sem `will-change` permanente.
- **Pausar** animações contínuas quando a aba ou o elemento está fora da tela (`visibilitychange`, `IntersectionObserver`).
- Máximo de **uma** animação contínua no celular.
- **Orçamento [H]:** HTML + CSS + JS da interface ≤ 150 KB sem compressão; primeira tela utilizável sem requisição além do HTML e dos dados.
- Pergunta de controle (Bloco 28): "dá para obter o mesmo com menos?" Sim: a rede do Core pode ser só os anéis estáticos (já é o fallback).

---

## 4. Estado da aplicação (formato lógico)
```
app
 ├─ conexão: online | offline | reconectando
 ├─ sessão/ambiente: local | nuvem | híbrido
 ├─ config: tema, movimento, padrões do pedido, limites
 ├─ projetos[]: id, título, estado, motores, ambiente, progresso, versão atual
 ├─ projetoAtual: plano[], tarefas[], arquivos[], versões[], pergunta?, logs
 ├─ motores[]: id, nome, estado, versão, capacidades, último teste
 ├─ filaOffline[]: id, pedido, anexos, estado (pendente/enviando/enviado/erro)
 └─ ui: visão, painéis abertos, toasts, modal
```
**Fonte da verdade:** o servidor. A interface mantém cópia local de leitura e a fila offline de escrita.

## 5. Fila offline (Regra 3)
- Armazenamento: IndexedDB (pedidos + anexos como blobs, com limite configurável de tamanho).
- Cada item tem **id único**, para a sincronização ser **idempotente** (sem duplicar se a conexão cair no meio).
- Estados: `pendente → enviando → enviado | erro`. A interface mostra "Na fila (offline)".
- Sincroniza ao voltar a rede e ao abrir a aplicação; reenvia com intervalos crescentes.
- Anexos grandes: envio em partes, retomável.
- O `sw.js` guarda a interface em cache para abrir offline; **não** guarda resultados gerados.

## 6. Comunicação interface ↔ Core [H]
- **HTTP + JSON** para comandos; **SSE** (eventos em um sentido) para estado em tempo real. Mais leve que WebSocket; só há fluxo do servidor para a interface.
- Endpoints lógicos (nomes finais na implementação):
  `POST pedidos` · `GET projetos` · `GET projetos/{id}` · `GET projetos/{id}/eventos` · `POST projetos/{id}/respostas` · `POST projetos/{id}/pausar|retomar|cancelar` · `POST projetos/{id}/ajustes` · `GET arquivos/{id}` · `GET motores` · `POST motores/{id}/teste` · `GET|PUT configuracoes`.
- **Cancelar** aceita `apagar_arquivos: false` (padrão) conforme a Regra 1.
- **Ajuste** devolve o conjunto de etapas afetadas (Regra 2); o Core calcula o impacto por dependência entre saídas e entradas.
- Erros em formato único: `código · mensagem · causa · ação sugerida`.

---

## 7. Backend — dependências por necessidade
Bloco 8: só agora, com a necessidade comprovada, as tecnologias são nomeadas. **Todas são [H], a confirmar.**

| Necessidade | Opção recomendada | Alternativa | Critério |
|---|---|---|---|
| Linguagem do Core e motores | **Node.js (LTS)**, mesma linguagem da interface e do renderizador | Python | uma linguagem só, ecossistema de renderização |
| Servidor HTTP/SSE | biblioteca mínima do próprio runtime | framework completo | menos dependência |
| Banco de dados | **SQLite** local · relacional gerenciado na nuvem, **mesmo esquema** | só um dos dois | híbrido, uma única camada de acesso |
| Fila de tarefas | **fila persistente no próprio banco** (v1) | broker externo | evita serviço extra |
| Validação de contratos | esquemas JSON validados na entrada e na saída de cada motor | — | contrato único |
| Imagem (rasterização de SVG) | **rasterizador de SVG leve** | navegador sem cabeça | solução mais leve primeiro |
| Imagem/vídeo (HTML/CSS em quadros) | **navegador sem cabeça**, só quando o conteúdo exigir | — | pesado, usado por último |
| Vídeo (codificação, áudio, legendas) | **FFmpeg** (já citado no briefing) atrás de adaptador | outro codificador | licença depende da compilação: **verificar** |
| ZIP | biblioteca padrão do runtime ou utilitário leve | — | simples |
| Segredos | variáveis de ambiente / cofre do sistema; **nunca no front-end** | — | Bloco 30 |
| Isolamento | ver seção 9 | — | segurança |

**Regra:** todo item acima fica atrás de adaptador (`motor → módulo → adaptador → ferramenta`). Trocar uma peça não reescreve o motor.

---

## 8. Motores iniciais — técnica
### 8.1 Motor de Sites
Saída: `index.html` único ou pasta (`css/`, `js/`, `images/`). Recebe imagens do Motor de Imagens via Core. Validação: abre sem erro, links, responsividade, recursos presentes.

### 8.2 Motor de Imagens (por código)
Entrada: descrição estruturada de composição (SVG/HTML/CSS) vinda do Core, ou arquivos do usuário.
Processamento: composição em SVG → rasterização leve; HTML → imagem via navegador sem cabeça só se necessário.
Saída: SVG, PNG, JPG, WEBP. Lote e variações. Validação: arquivo existe, dimensões, tamanho, abre.

### 8.3 Motor de Vídeos (por código)
Pipeline:
```
roteiro/cenas (JSON de linha do tempo)
  → cada cena = HTML/SVG/CSS + animação determinística por tempo
  → renderização em quadros (por cena, em blocos)
  → codificação (adaptador de vídeo)
  → junção de blocos + áudio/legenda
  → validação (duração, resolução, reproduz)
```
**Pontos-chave para vídeos longos (> 1 h):**
- **Blocos e checkpoints:** a renderização é dividida em segmentos; cada um é salvo. Se falhar ou for interrompido, retoma do último bloco. Isso também sustenta a Regra 2 (refazer só o que mudou).
- **Limites impostos por processo:** tempo, CPU, memória e tamanho (seção 9).
- **Estimativa:** o Core calcula a partir de duração × resolução × complexidade da cena, calibrada por um **teste de capacidade** rodado na instalação e em cada ambiente.
- **Resolução:** 1080p ou 4K por configuração do projeto.

---

## 9. Core, Runners e Sandbox [H]
**Core (módulos):** interpretador · planejador · pesquisa (opcional) · orquestrador · validador · memória de projeto · gestor de arquivos · política.

**Escolha de ambiente (Runner):** o Core decide pela regra, nesta ordem:
1. Configuração do projeto (Local, Nuvem ou Híbrido) manda.
2. Em Automático/Híbrido: onde estão os arquivos de entrada; carga estimada; disponibilidade; custo.
3. Em caso de empate: Local.
O motor nunca sabe onde roda.

**Armazenamento:** interface única com dois backends; cada arquivo tem **hash**, o que permite sincronizar só diferenças e reaproveitar saídas (Regra 2).
**Sincronização local↔nuvem:** cada projeto tem um **local primário**, definido na criação (pelo Core se estiver Automático). A réplica segue o primário. Conflitos: vence o primário; versões antigas são mantidas.

**Sandbox:**
- Cada tarefa roda em **processo isolado**, com pasta própria, **lista de binários permitidos** e argumentos montados pelo Core (nunca texto do usuário como comando).
- Limites por tarefa: tempo, CPU, memória, tamanho de saída, número de processos.
- Nuvem: contêiner por tarefa. Local: isolamento do sistema operacional com limites de recurso.
- Sem acesso à rede por padrão; liberado só para etapas autorizadas (pesquisa web).
- Arquivos temporários removidos ao fim; saída copiada para o armazenamento do projeto.

**Cancelar (Regra 1):** encerra os processos, grava o estado, **mantém os arquivos gerados**; só apaga se a ação pedir.

---

## 10. Dados (esquema lógico)
Entidades da Etapa 2 + campos técnicos:
`Projeto` (ambiente, local_primario, dono) · `Pedido` (texto, anexos, modo, opções) · `Plano` (etapas, dependências) · `Tarefa` (motor, entrada_hash, saida_hash, tentativas) · `Artefato` (hash, origem, versão, caminho) · `Execução` (runner, tempo, recursos usados) · `Validação` · `Decisão` · `Versão` · `Motor/Módulo/Ferramenta` · `Provedor` (desligado por padrão) · `Política` (limites, binários permitidos) · `FilaOffline` (só no cliente).
`entrada_hash`/`saida_hash` permitem decidir o que **ainda vale** num ajuste (Regra 2).

---

## 11. Acessibilidade técnica
- Todo estado tem **texto + ícone**; o movimento é reforço.
- `aria-live` único e educado para estado; foco movido para o título da visão ao navegar.
- `dialog` nativo: foco preso, `Esc`, retorno de foco.
- Alvos de 44 px; teclado completo; atalho Ctrl/Cmd+Enter documentado e desativável.
- Texto até 200% sem quebra; contraste AA conferido no QA.
- `prefers-reduced-motion` + opção manual "Reduzir movimento".

## 12. Estrutura final de arquivos
```
vecorion-engine/
├── interface/
│   ├── index.html          ← interface inteira (HTML+CSS+JS+SVG)
│   └── sw.js               ← cache e fila offline
├── core/ (api, interpretador, planejador, pesquisa, orquestrador, validador, memoria, arquivos, politica)
├── contratos/              ← esquemas: tarefa, resultado, capacidade, erro, evento
├── runners/ (local, nuvem)
├── armazenamento/ (local, nuvem)
├── motores/
│   ├── sites/   (manifesto, modulos/, adaptadores/)
│   ├── imagens/ (manifesto, modulos/, adaptadores/)
│   └── videos/  (manifesto, modulos/, adaptadores/)
├── sandbox/
├── provedores/             ← vazio na v1 (opcionais, desligados)
├── config/
└── docs/                   ← Artifact e especificações
```
**Arquivos adicionais e justificativa:** `sw.js` (offline), backend em pastas (execução fora do navegador), `contratos/` (motores desacoplados). Nada mais.

## 13. Riscos técnicos
1. **Renderização determinística de vídeo** (mesma cena, mesmo quadro) é o ponto mais delicado.
2. **Estimativas de tempo e recurso** erradas: mitigadas pelo teste de capacidade e por margem de segurança.
3. **Sincronização local↔nuvem:** o local primário reduz, mas não elimina conflitos.
4. **Licença do FFmpeg** conforme a compilação; verificar antes de distribuir.
5. **Navegador sem cabeça** é pesado: só entra quando SVG/CSS simples não bastam.
6. **Service worker** exige cuidado com versão de cache para não servir interface antiga.
7. **Segurança do sandbox** segue como o maior risco; precisa de testes específicos.

## 14. Ajustes de copy pela aprovação das regras
- **Cancelar projeto:** "Cancelar este projeto? A execução será interrompida e o que já foi gerado fica salvo em Arquivos." Opção (desmarcada): "Apagar também os arquivos gerados." · Cancelar projeto · Continuar.
- **Pedir ajuste:** ajuda "Só o que mudou será refeito." (sem [confirmar]).
- **Nova versão:** "Versão {n} criada. Só o que mudou foi refeito."
- **Offline (faixa):** "Você está offline. Seus pedidos ficam na fila e são enviados quando a conexão voltar."
- **Item na fila:** "Na fila · aguardando conexão" → "Enviando" → "Enviado".
- **Tagline** no cabeçalho de Novo pedido (rodapé do título, discreta): "Do pedido ao resultado."
- **Ainda [confirmar]:** limite de caracteres do pedido · detalhes de armazenamento · prazo do aviso de pergunta pendente · garantia de "projeto não perdido" no erro inesperado.

## 15. Preparação para a Etapa 7 (construção) — ordem proposta
1. Contratos e esquemas.
2. Core mínimo + banco + fila.
3. Interface (`index.html`) conectada a um Core simulado.
4. Sandbox e Runner local.
5. Motor de Sites → Motor de Imagens → Motor de Vídeos.
6. Runner nuvem e sincronização.
7. `sw.js` e fila offline.
8. QA completo, auditoria de segurança e desempenho.

## 16. Pendências [N]
1. Aprova **Node.js** como linguagem do backend? (alternativa: Python)
2. Aprova **SQLite local + banco relacional na nuvem** com o mesmo esquema?
3. Aprova **pilha de fontes do sistema** na v1, em vez de fontes web?
4. Aprova incluir `sw.js` (offline) já na v1, ou deixar para depois?
5. Aprova a ordem de construção da seção 15?
6. Algum ambiente de nuvem já definido (próprio ou provedor)?
7. Arquivo do logo (ainda pendente).

## 17. Registro
| Versão | Mudança |
|---|---|
| 0.5 | Etapa 5 — Copy e conteúdo |
| 0.6 | Etapa 6 — Preparação técnica. Interface em 1 HTML (+ `sw.js`); backend por pastas; regras 1–3 incorporadas. Nada implementado. Não avançar sem aprovação. |

---

<!-- Etapa 7 -->

## Etapa 7
**Versão 0.7 · Etapa 7 — Construção (interface)**

Interface publicada: https://claude.ai/artifact/DsSWej2pMwBZzdPACqkibs

## Construído
- **`index.html` único** (HTML + CSS + JS + SVG inline, sem dependências externas), conforme a Etapa 6.
- **Telas:** Novo pedido, Projetos, Projeto (abas Plano, Arquivos, Resultado), Motores, Configurações.
- **Core simulado:** plano por etapas, delegação a motores, pergunta do Core, ciclo de correção, cancelamento e ajuste. Nada é gerado de verdade; isto valida fluxo, copy e motion.
- **Regras aprovadas:** cancelar preserva arquivos (com opção de apagar); ajuste "refaz só o que mudou" (mensagem; lógica real depende do Core); fila offline local com envio ao reconectar.
- **Limites de vídeo:** estimativa ao vivo e aviso com ações (ajustar pedido, aumentar limite).
- **Design:** tokens da Etapa 3, tema escuro/claro, cores de motor, fio do Core, logo provisório com desenho único por sessão.
- **Arte procedural:** rede do Core (seed fixo, 24 nós no desktop, só anéis no celular), constelação por projeto.
- **Motion:** só `transform` e `opacity`; `prefers-reduced-motion` e opção manual.
- **Acessibilidade:** `aria-live`, `dialog` nativo, foco por visão, alvos de 44 px, teclado completo.

## Não construído nesta etapa
Aba Versões e comparador · atração da rede ao cursor · fila offline em IndexedDB e `sw.js` (usa armazenamento local simples) · pausar/retomar · **todo o backend**: Core real, motores de Sites, Imagens e Vídeos, runners, sandbox, banco e sincronização.

## Pendências
1. Logo definitivo (arquivo).
2. Aprovações da Etapa 6 (Node.js, SQLite + banco na nuvem, fontes do sistema, `sw.js`, ordem de construção, ambiente de nuvem).
3. QA completo (contraste, responsividade, teclado, desempenho) ainda não executado.

## Registro
| Versão | Mudança |
|---|---|
| 0.6 | Etapa 6 — Preparação técnica |
| 0.7 | Etapa 7 — Interface construída com Core simulado. Não avançar sem aprovação. |

---

<!-- Etapa 8 -->

## Etapa 8
**Versão 0.8 · Etapa 8 — QA e Refinamento (interface)**
Interface: https://claude.ai/artifact/DsSWej2pMwBZzdPACqkibs (atualizada)

## Como testei
Ambiente sem navegador. **Medi:** sintaxe do JavaScript, contraste (cálculo WCAG), tamanho do arquivo e o fluxo do Core simulado em Node (estados, pergunta, correção, revisão de plano, cancelamento, logs). **Revisei no código:** acessibilidade, segurança, responsividade e motion. **Não pude medir:** FPS, carga real, hover, toque, rolagem e aparência renderizada. Isso exige abrir em navegador e celular.

## Defeitos encontrados e corrigidos
| # | Defeito | Correção | Status |
|---|---|---|---|
| 1 | Bordas de campos e botões com contraste 1,4:1 (mínimo 3:1) | novo token `--bdi` (3,6:1 escuro, 3,9:1 claro) | corrigido, medido |
| 2 | Placeholder com 3,9:1 (mínimo 4,5:1) | cor do placeholder = texto secundário (8,2:1) | corrigido, medido |
| 3 | **Logo nunca animava**: o CSS não alcança o conteúdo de `<use>` | caminho do logo inline | corrigido, **a conferir visualmente** |
| 4 | Modal podia confirmar ao apertar `Esc` (valor de retorno antigo) | `returnValue` zerado a cada abertura | corrigido |
| 5 | Abas sem papéis ARIA nem setas do teclado | `tabpanel`, `aria-controls`, setas, aba reiniciada ao trocar de projeto | corrigido |
| 6 | Sem salto para o conteúdo | botão "Ir para o conteúdo" | corrigido |
| 7 | Toasts não anunciados a leitores de tela | `role="status"` | corrigido |
| 8 | Rótulo "Config." não continha o nome acessível | rótulo "Configurações" | corrigido |
| 9 | "Novo pedido" longo na barra inferior | no celular mostra "Novo" | corrigido |
| 10 | Giro do micro-arco ativo no celular (Etapa 4 permite uma só animação contínua) | desligado no celular | corrigido |
| 11 | Corte seco da rede nas bordas da coluna | máscara de esmaecimento | corrigido, **a conferir** |
| 12 | Título longo podia vazar nos cartões | quebra segura | corrigido |
| 13 | Log duplicado ao retomar após a pergunta | registro único por etapa | corrigido, testado |

## Resultados por área
- **Funcionalidade:** fluxo completo passou no teste simulado (pergunta → execução → correção → concluído; revisão de plano; cancelamento). Botões e dialogs: revisados no código, não clicados em navegador.
- **Contraste medido:** texto secundário 8,2:1 · acento 7,5:1 · botão primário 6,3:1 (escuro) e 4,9:1 (claro) · estados no tema claro 4,6 a 5,1:1 · cores de motor sobre o fundo 7,4 e 9,5:1. Passa AA.
- **Segurança:** todo texto do usuário entra por `textContent` ou escapado; sem `eval`, sem requisições externas, sem segredos no cliente. Os dados ficam só no navegador.
- **Performance:** 27,6 KB (meta de 150 KB). Só `transform` e `opacity` animados. Rede com até 24 nós (≈ 50 elementos). Sem Canvas e sem partículas, então não há o que medir de FPS.
- **Reduced motion:** atributo `data-motion` zera animações e transições; o estado continua em texto e glifo (✔ ● ○ ↺).
- **Mobile:** barra inferior com área segura, alvos de 44 px, campos com 16 px (sem zoom no iOS). Rede reduzida a anéis estáticos. Não visto em tela real.
- **Assets:** nenhum arquivo externo; nada para quebrar. O logo segue provisório.

## Auditoria anti-template
**Pergunta: "isso parece criado para este projeto?" Resposta honesta: parcialmente.**
- **Específico do projeto:** o fio do Core com ramos na cor de cada motor, a rede orbital em torno do Core, a constelação própria de cada projeto, a linguagem "pedido → resultado".
- **Genérico:** menu lateral + cartões iguais + formulário. Estrutura de painel comum. Raio e borda iguais em todos os cartões.
- **Refinamento aplicado:** o fio agora **volta atrás** quando o Core corrige: o marcador vira ↺, a linha recua e retorna. Isso dá forma visual ao ciclo do infinito, e nenhum painel comum faz isso.
- **Ainda fraco (não refeito):** o ramo ao motor é discreto; a tela de Projeto ainda parece uma lista de etapas. Próximo passo possível: ramo longo com o nome do motor e arco de retorno desenhado.
- **Teste sem logo e sem texto:** o fio com recuo e as cores de motor ainda identificam o produto; o resto não.

## Ainda não verificado
FPS e carga reais · hover e toque · rolagem em celular · leitor de tela de verdade · tema claro renderizado · logo animado · máscara da rede.

## Pendências
1. Abrir a interface no navegador e no celular e me dizer o que vê (principalmente o logo, a rede e o fio).
2. Logo definitivo (arquivo).
3. Aprovações da Etapa 6 e construção do backend.

## Registro
| Versão | Mudança |
|---|---|
| 0.7 | Etapa 7 — Construção |
| 0.8 | Etapa 8 — QA: 13 defeitos corrigidos, fio com recuo, auditoria anti-template. Não avançar sem aprovação. |

---
