# AI Image Prompt Workflow

A reusable method for turning a design need — a hero image, a service graphic, a
portfolio mockup, a team photo, a social post — into a detailed, model-agnostic
AI image-generation prompt. Works with Midjourney, DALL·E, Google Imagen/Gemini,
Stable Diffusion, or any similar tool.

This doc has two parts:

1. **The framework** — nine questions to answer, in order, before writing a prompt.
2. **Moshapo Digital Studio defaults** — the brand-specific answers to reuse across
   this site. When you take this workflow to a future client project, keep the
   framework and swap out the defaults in [Adapting for a client project](#adapting-for-a-client-project).

---

## The framework

Answer these nine fields for any image you need. Once answered, string them
together into a single prompt paragraph (an example format is at the end of
each worked example below).

| # | Field | Question to answer |
|---|-------|---------------------|
| 1 | **Industry** | What business or sector is this image representing? (e.g. professional services, e-commerce, hospitality) |
| 2 | **Section** | Where on the page/asset does this live? (hero, service card, portfolio gallery, team bio, social post) |
| 3 | **Purpose** | What is this image doing for the viewer? (build trust, show the product, signal premium quality, illustrate a concept) |
| 4 | **Style** | Photographic, 3D render, flat illustration, abstract/geometric, mockup-on-device? |
| 5 | **Composition** | Subject placement, negative space for text overlay, foreground/background relationship, framing (close-up, wide, isometric) |
| 6 | **Lighting** | Direction, quality, and mood (soft diffused daylight, dramatic single-source, studio softbox, low-key) |
| 7 | **Camera angle** | Eye-level, low angle, high/overhead, three-quarter, straight-on product shot |
| 8 | **Brand colors** | Which palette values must appear, and where (background, accent, subject wardrobe/props) |
| 9 | **Aspect ratio** | Match the slot it will render into (see table below) |

Then close every prompt with an **exclusion clause** — what must *not* appear.
For this studio, the standing exclusions are:

> No visible human faces or recognizable people, no readable text or typography
> rendered into the image, no logos or brand marks (real or invented), no
> watermarks.

(People and logos are excluded because AI-generated faces/logos read as fake or
legally risky to use as if they were real clients/staff. See exceptions for
team photos below.)

---

## Moshapo Digital Studio defaults

**Brand colors** (from `app/globals.css`):

| Token | Hex | Use |
|---|---|---|
| Black | `#0D0D0D` | Primary background / dark sections |
| Dark gray | `#1A1A1A` | Secondary dark surface |
| Gold | `#D4AF37` | Primary accent |
| Gold bright | `#E4C158` | Highlight / hover accent |
| White | `#FFFFFF` | Light backgrounds, text on dark |
| Light gray | `#F5F5F5` | Light section surface |

**Typography mood** (for any image implying type, e.g. mockups): geometric
sans display (Space Grotesk) paired with a humanist sans body (Inter) — bold,
confident, uppercase eyebrows, generous tracking.

**Overall visual language:** black-and-gold, high contrast, minimal, confident,
premium-but-approachable. Diagonal/wedge accent shapes are the studio's signature
motif (see `components/ui/PlaceholderArt.tsx` and `Section`'s `diagonal` prop) —
lean on diagonals or angular accents in compositions where it fits naturally,
rather than soft/rounded shapes.

**Standing exclusion clause** (append to every prompt): *no visible human faces,
no readable text or typography rendered into the image, no logos or brand marks,
no watermarks* — except for the Team Photo case below, where a real photo (not
AI-generated) is required instead.

### Aspect ratio reference

| Use case | Aspect ratio | Notes |
|---|---|---|
| Hero image | `16:9` (wide) or `3:2` | Sits beside headline copy, needs negative space |
| Service/division card image | `4:3` | Matches `PlaceholderArt` default and card grid |
| Portfolio gallery cover | `4:3` | Matches `PortfolioCard` image slot |
| Portfolio gallery detail shots | `16:9` or `4:3` | Depends on mockup orientation |
| Team photo | `1:1` or `4:5` | Real photography only, not AI |
| Social graphic — Instagram feed | `1:1` | |
| Social graphic — Instagram/Story | `9:16` | |
| Social graphic — LinkedIn/X | `1.91:1` | |

---

## Worked examples

### 1. Hero image

- **Industry:** general studio (brand/web/tech) — not client-specific
- **Section:** homepage hero, right side, beside headline and CTA buttons
- **Purpose:** signal premium, confident, technical craftsmanship without literal iconography
- **Style:** abstract 3D render / geometric composition
- **Composition:** off-center subject, left-third negative space reserved for text overlay (matches existing hero layout), single strong focal shape
- **Lighting:** dramatic single-source key light from upper right, deep shadow falloff
- **Camera angle:** slight low angle, three-quarter view
- **Brand colors:** black (#0D0D0D) background, gold (#D4AF37) as the lit accent surface, subtle gold-bright rim light
- **Aspect ratio:** 16:9

**Prompt:**
> Abstract 3D render of angular gold geometric shards floating above a deep black
> background, single dramatic light source from the upper right casting long
> shadows, gold (#D4AF37) lit facets with a bright rim highlight (#E4C158),
> composition weighted to the right third of the frame with open negative space
> on the left for text overlay, slight low camera angle, three-quarter view,
> premium and minimal mood, 16:9 aspect ratio. No visible human faces, no
> readable text or typography, no logos or brand marks, no watermarks.

### 2. Service division image

- **Industry:** brand/creative, websites, or technology (pick per division)
- **Section:** service division card / detail page
- **Purpose:** visually differentiate the three divisions at a glance
- **Style:** flat/isometric illustration
- **Composition:** centered subject, generous padding, single clear metaphor (e.g. layered panels for "Brand & Creative", a browser-window frame for "Websites", connected nodes for "Technology")
- **Lighting:** flat, even, no cast shadows (illustration-style)
- **Camera angle:** isometric / straight-on, whichever suits the metaphor
- **Brand colors:** dark gray (#1A1A1A) background, gold (#D4AF37) line work and fills, white accents
- **Aspect ratio:** 4:3

**Prompt (Technology division example):**
> Flat isometric illustration of interconnected geometric nodes and thin
> connecting lines suggesting a digital systems network, dark gray (#1A1A1A)
> background, gold (#D4AF37) line work and node fills with white highlight
> details, centered composition with generous padding, even flat lighting with
> no cast shadows, minimal and technical mood, 4:3 aspect ratio. No visible
> human faces, no readable text or typography, no logos or brand marks, no
> watermarks.

### 3. Portfolio mockup

- **Industry:** the fictional/concept client's industry (e.g. "Coastal Consulting Co." → professional services)
- **Section:** portfolio gallery cover or detail shot
- **Purpose:** show the design work as if presented in a real, polished context (device mockup, print mockup)
- **Style:** photographic product mockup (laptop/phone screen, or printed collateral on a surface)
- **Composition:** device or print piece at a natural angle, uncluttered surface, single light prop max
- **Lighting:** soft diffused daylight from one side, minimal shadow
- **Camera angle:** three-quarter, eye-level
- **Brand colors:** neutral surface (light gray or warm wood tone), the client concept's own palette appears *on the mockup screen/print* — not the studio's gold/black unless it's a studio-branded piece
- **Aspect ratio:** 4:3 cover, 16:9 for wide detail shots

**Prompt (Coastal Consulting Co. — professional services, navy-and-sand palette):**
> Photographic product mockup of a laptop displaying a clean, minimal
> navy-and-sand professional-services website homepage on its screen, resting
> at a slight three-quarter angle on a light gray desk surface, soft diffused
> daylight from the left with minimal shadow, eye-level camera angle,
> uncluttered composition with a single small plant or notebook prop, calm and
> credible mood, 4:3 aspect ratio. No visible human faces, no readable body
> text (a blurred/abstracted UI is fine), no real logos or brand marks, no
> watermarks.

### 4. Team / founder photo

**This is the one case where the answer is: do not generate this with AI.**
A founder/team photo is a trust signal — an AI-generated "person" used to
represent a real founder is misleading to site visitors and against this
studio's own portfolio disclosure principle (see `conceptLabel()` in
`content/portfolio.ts`, which requires labeling non-real work). Use a real
photograph instead. If a placeholder is needed before a real photo exists,
use the existing `PlaceholderArt` geometric component rather than an
AI-generated face.

### 5. Social graphic

- **Industry:** general studio promo, or a specific service being promoted
- **Section:** Instagram feed/story, LinkedIn/X post
- **Purpose:** stop the scroll, reinforce brand recognition, support a caption (not replace it — no text baked into the image)
- **Style:** bold geometric/abstract graphic, on-brand diagonal motif
- **Composition:** centered or rule-of-thirds focal shape, safe margin around edges for platform UI overlays (especially Stories), room for the caption to do the talking
- **Lighting:** flat graphic lighting or a single soft gradient, not photographic
- **Camera angle:** n/a (graphic, not a photographed scene) — unless it's a photo-based post, in which case treat it like the hero example
- **Brand colors:** black (#0D0D0D) background, gold (#D4AF37) and gold-bright (#E4C158) diagonal accent shapes, white for any illustrative line work
- **Aspect ratio:** 1:1 (feed), 9:16 (story), 1.91:1 (LinkedIn/X)

**Prompt (feed post, 1:1):**
> Bold graphic composition of angular gold (#D4AF37) diagonal wedges cutting
> across a deep black (#0D0D0D) background, one wedge accented in bright gold
> (#E4C158), asymmetric rule-of-thirds layout with a clear open area for
> caption/text to be added afterward, flat modern graphic-design style, high
> contrast, premium minimal mood, 1:1 aspect ratio. No visible human faces, no
> readable text or typography rendered into the image, no logos or brand
> marks, no watermarks.

---

## Adapting for a client project

When reusing this workflow for a different client:

1. Replace the **brand colors** table with the client's actual palette (get hex
   values from their brand guide or existing assets).
2. Replace **industry** in each worked example with the client's actual sector.
3. Re-derive the **visual language** paragraph — don't default to black-and-gold
   diagonals; ask what that client's signature motif is (or propose one).
4. Keep the **nine-field framework**, the **aspect ratio table** (it's brand-agnostic),
   and the **exclusion clause** structure as-is — only the team-photo rule (real
   photography, not AI) is a universal recommendation worth keeping for every client.
5. Save the adapted version as its own doc (e.g. `docs/ai-image-prompts-{client-slug}.md`)
   rather than overwriting this one, so this file stays the Moshapo Digital Studio reference.
