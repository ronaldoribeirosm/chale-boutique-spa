# Product

## Register

brand

## Platform

web

## Users

Casais planejando uma escapada romântica para Campos do Jordão — aniversário de casamento, lua de mel, ou simplesmente um fim de semana de silêncio na serra. Pesquisam à noite, no celular, no sofá, já com o Booking ou Airbnb abertos em outra aba. Já decidiram o destino; estão decidindo onde ficar e comparando preço/vantagem entre canais.

## Product Purpose

Site próprio e canal de reserva direta para um chalé boutique de alto padrão, hoje vendido só via OTAs (Booking, Airbnb). O site recupera o tráfego de quem já busca o nome da propriedade, reduz a comissão paga a intermediários e devolve ao anfitrião o controle sobre fotos, preço e narrativa. Sucesso é lead qualificado (WhatsApp/e-mail) e, eventualmente, reserva direta confirmada.

## Positioning

O único lugar onde dá para ver a disponibilidade real do chalé e reservar direto — sem taxa de serviço, sem repasse de comissão, com resposta humana no WhatsApp.

## Conversion & proof

- Primary e secondary CTA: "Ver disponibilidade" (calendário + WhatsApp pré-preenchido) como primária; "Perguntar no WhatsApp" como fallback para quem não decidiu a data.
- A linha que o visitante lembra depois de 10s: "Seu refúgio na serra — sauna, jacuzzi e silêncio, sem taxa de serviço."
- Escada de crença: (1) isto é um lugar real, com prova externa — nota 9,4 no Booking, linkada; (2) reservar direto é vantajoso — sem taxa de serviço, versus o preço que já viu no Airbnb; (3) é fácil e rápido — calendário visível, WhatsApp com data pré-preenchida, sem cadastro; (4) confio o suficiente para fechar aqui em vez de voltar à OTA.
- Prova disponível: nota 9,4 no Booking (citar com link para a fonte, nunca inventar depoimento). Fotos e nome da propriedade são placeholder até autorização do anfitrião — ver nota abaixo.

## Brand Personality

Acolhedor, não corporativo. Sensorial — fala de vapor, madeira, névoa, silêncio, não de "m² e comodidades". Calmo — frases curtas, muito espaço, sem exclamação gritada. Honesto — sem escassez falsa, sem depoimento inventado, sem pop-up.

## Anti-references

Nada de teal, neon, glassmorphism ou gradiente roxo — isso é estética de SaaS, não de serra. Sem card genérico tipo dashboard. Sem eyebrow numerado em toda seção. Sem pop-up de newsletter — isto é chalé, não produto de assinatura. Sem depoimento inventado ou contador de escassez falso.

**Nota sobre a marca real:** o uso do nome, endereço e fotos do chalé real (anfitrião: Gabriel) depende de autorização dele. Esta implementação usa o nome e os dados de posicionamento dos documentos de planejamento como conteúdo de demonstração, mas substitui fotografia real por composições visuais (cor, luz, textura) — nenhuma foto de terceiros é usada. Antes de publicar com a marca real, trocar os placeholders por fotos autorizadas.

## Design Principles

1. **A paisagem manda, a interface some.** Sem foto real ainda, a cor e a luz fazem esse trabalho — nunca a UI compete com o que deveria ser a vista.
2. **Muito respiro.** Luxo é espaço em branco; nenhuma seção é apertada.
3. **Movimento discreto.** Se a animação chama atenção para si mesma, está errada — revela conteúdo, não decora.
4. **Cobre com parcimônia.** É tempero: um CTA cobre num mar de névoa converte; cobre em tudo vira circo.
5. **Mobile-first de verdade.** O único cenário que importa é o casal decidindo às 23h, no celular.

## Accessibility & Inclusion

WCAG AA como piso (contraste mínimo 4.5:1 para texto de parágrafo, 3:1 para texto grande/ícone — ver tabela de contraste em DESIGN.md). `prefers-reduced-motion` obrigatório e testado, não decorativo. Nenhuma informação (disponibilidade, preço, status) depende só de cor.
