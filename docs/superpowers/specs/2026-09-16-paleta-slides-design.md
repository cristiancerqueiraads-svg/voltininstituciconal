# Paleta VOLTIN (slides 1–5) — Design

**Data:** 2026-09-16
**Status:** Aprovado pelo usuário

## Objetivo

Aplicar no site institucional as cores propostas nos slides `motivacao/slide1..5.jpeg`,
sem alterar o layout/HTML existente — apenas paleta e cor de fundo/texto por seção.

## Paleta (amostrada das imagens com PIL)

| Token | Hex | Origem nos slides |
|---|---|---|
| `--orange` | `#F2680F` | Fundo slide1 (Climatização) e slide5 (CTA final) |
| `--green-service` | `#006B3A` | Fundo slide2 (Elétrica) |
| `--green-dark` | `#0A2A20` | Fundo slide3 (Diferenciais), slide4 (FAQ), footer slide5 |
| `--navy` | `#0C2434` | Títulos grandes nos cards brancos (slides 1–2) |
| `--orange` (detalhe) | `#F26419→#F2680F` | Labels, ícones, chevrons |

## Decisões de escopo (confirmadas com o usuário)

1. **Só cores** — manter HTML/layout atual (não dividir Serviços em 2 seções, não trocar fotos).
2. **Site inteiro adaptado** à nova paleta (hero, stats, ideia, dores, passos incluídos).
3. **Serviços:** fundo verde profundo; cards brancos com acento laranja (Climatização) e verde (Elétrica).

## Mapeamento por seção

| Seção | Antes | Depois |
|---|---|---|
| Header | verde `#1A3C2F` | verde profundo `#0A2A20` |
| Hero | off-white | verde profundo, texto branco, badge/linhas laranja |
| Stats | branco | branco, números laranja, títulos navy |
| Uma Ideia Simples | gradiente claro | off-white, título navy |
| Dores | cards brancos | cards brancos, ícones laranja, títulos navy |
| Serviços | branco (`section--alt`) | fundo verde profundo; card Climatização com barra/ícone laranja, card Elétrica com barra/ícone verde; títulos navy |
| Diferenciais | branco | fundo verde profundo; cards translúcidos (borda esverdeada, bg rgba branco ~4%), ícones laranja, texto branco (slide3) |
| 3 passos | branco | branco, números/setas laranja, títulos navy |
| Depoimentos | laranja `#F26419` | laranja `#F2680F` (manter) |
| FAQ | branco (`section--alt`) | fundo verde profundo; perguntas com borda rgba clara, texto branco, chevron laranja (slide4) |
| CTA final | off-white | fundo laranja, título navy escuro, texto escuro, botão WhatsApp verde profundo (slide5) |
| Footer | verde `#1A3C2F` | verde profundo; títulos de coluna laranja (slide5) |

## Legibilidade / acessibilidade

- Texto branco sobre `#0A2A20` e laranja `#F2680F` → contraste OK.
- Navy `#0C2434` sobre branco → contraste alto.
- Títulos do CTA final em navy sobre laranja (como slide5, texto escuro).

## Fora de escopo

- Mudanças de layout/HTML, troca de imagens, novas seções, animações.
