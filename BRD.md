# Business Requirements Document (BRD)
## CuCu Parent — Baby Tracker App

| | |
|---|---|
| **Product** | CuCu Parent (Baby Tracker) — mobile app |
| **Document type** | Business Requirements Document |
| **Version** | 1.0 |
| **Date** | 18 November 2026 |
| **Status** | Draft for review |
| **Prepared for** | Product, Design & Engineering |
| **Source of truth** | Interactive HTML prototype (this repository) |

---

## 1. Document Purpose

This BRD defines the business and functional requirements for the CuCu Parent (Baby Tracker) mobile application. It captures every user flow and use case represented in the current interactive prototype so that product, design, engineering, and QA share one agreed scope.

It describes **what** the product must do and **why**, not the technical implementation. Each requirement is traceable to a screen in the prototype (see §15 Screen Inventory).

---

## 2. Executive Summary

CuCu Parent is a mobile companion for parents of babies and young children. It helps a family **capture memories, track developmental milestones and health, plan what the child needs, and connect with a trusted parenting community and experts** — in one private, shareable space.

The product is built around four pillars:

1. **Remember** — a photo/video memory timeline with milestones, likes and comments.
2. **Grow** — milestone tracking, daily activity suggestions, meal suggestions, and a full health record (growth, notes, doctor visits, documents, vaccinations).
3. **Prepare** — age-based and travel checklists with product recommendations and reminders.
4. **Connect** — community groups, feeds, chat, and paid expert consultations.

A granular **sharing & access-control model** lets a parent invite family members with scoped access (e.g. Memories-only), and lets a user hold full access to their own child while viewing another child's shared memories.

---

## 3. Product Vision & Business Goals

**Vision:** Be the single, private home for a child's early years — the place parents return to daily to remember, track, prepare, and get support.

**Business goals**

| # | Goal | Success indicator |
|---|---|---|
| G1 | Drive daily engagement | DAU/MAU; memories added per week; milestone updates |
| G2 | Increase retention through the first 3 years | 3/6/12-month retention cohorts |
| G3 | Monetize via expert consultations & recommended products | Paid consultation conversion; product buy-link click-through |
| G4 | Grow virally through family sharing & community | Invites sent/accepted; community posts; group joins |
| G5 | Build trust via privacy-first, scoped sharing | Share-control adoption; low access-related support tickets |

---

## 4. Scope

### 4.1 In Scope (represented in the prototype)

- Onboarding & authentication (Google sign-in), child profile setup
- First-time / empty-state experience across all tabs
- Home dashboard: milestones, today's activities, meal suggestions, featured memory
- Memories: timeline, add/edit/delete, photo cropper, memory detail, likes & comments
- Community: groups, feeds, chat, expert consultations, member profiles, in-app payments, moderation
- Checklist: age essentials, travel/trip packing, product recommendations, wishlist, reminders
- Health monitoring: health profile, growth tracking, health notes, doctor visits, documents, vaccinations
- Sharing & access control: invite link/code with expiry, scoped roles, family viewer, multi-child
- Notifications across three surfaces (push, lock screen, in-app)

### 4.2 Out of Scope (current release)

- Backend architecture, data model, and API contracts (separate technical spec)
- Real payment processor integration beyond the in-app flow mockup
- Email/SMS channels (only in-app/push/lock-screen notifications are defined)
- Web/desktop clients (mobile only)
- Localization/multi-language (English only in prototype)
- Wearable/device integrations

### 4.3 Assumptions

- A1 — Users authenticate with a Google account; no separate password store.
- A2 — One account may manage one or more children and may view children shared to it.
- A3 — All child data is private by default and only visible to invited members.
- A4 — Network connectivity is available; offline is not a current requirement.
- A5 — The prototype's content (names, photos) is illustrative placeholder data.

### 4.4 Dependencies

- D1 — Google Sign-In / identity provider.
- D2 — Media storage & CDN for photos/videos.
- D3 — Payment gateway (card + UPI/app-based) for expert consultations and products.
- D4 — Push notification service.
- D5 — Product catalogue / affiliate buy-link provider for checklist recommendations.

### 4.5 Constraints

- C1 — Mobile-first; all flows must work at phone width.
- C2 — Privacy & child-data protection regulations must be honoured (see §13).
- C3 — Scoped access must be enforced server-side, not only in the UI.

---

## 5. User Personas & Roles

| Role | Persona | Access | Prototype flow |
|---|---|---|---|
| **R1 — Primary Parent (Owner)** | Agnes / Emma — day-to-day caregiver | Full access to own child; manages sharing | `home3.html`, `firsttime.html` |
| **R2 — Co-Parent / Multi-Child Parent** | A parent with their own child who also views another child shared to them | Full access to own child + scoped view of shared child | `multi-child.html` |
| **R3 — Family Viewer (Shared Access)** | Grandma Rose — extended family | Scoped, view-first access (e.g. Memories-only); can like & comment | `shared-memories.html` |
| **R4 — Community Member** | Other parents in groups/feeds | Community participation; no access to another family's private child data | `community.html` |
| **R5 — Expert / Consultant** | Verified parenting/medical expert | Paid consultations, can issue guidance/prescriptions | `community.html` (expert flow) |
| **R6 — New User** | First-time user with no data yet | Full access but empty states guide setup | `firsttime.html`, `onboarding.html` |

**Role rules**
- BR-ROLE-1 — The Owner of a child controls who else can access it and at what scope.
- BR-ROLE-2 — A shared viewer's capabilities never exceed the scope granted (e.g. Memories-only hides Health, Checklist, Community for that child).
- BR-ROLE-3 — A user may simultaneously be Owner of one child and Viewer of another.

---

## 6. Functional Requirements by Module

Legend: **FR** = functional requirement, **UC** = use case, **BR** = business rule.

---

### 6.1 Onboarding & Authentication
*Prototype: `onboarding.html`*

**Flow:** Splash → value-proposition intro (Capture memories → Celebrate milestones → Caring community) → Google sign-in → child setup → welcome.

| ID | Requirement |
|---|---|
| FR-ON-1 | Present an introductory carousel communicating the three core values (memories, milestones, community). |
| FR-ON-2 | Allow sign-in with Google ("so your little one's memories stay safe"). |
| FR-ON-3 | Capture child setup details: **baby's name, avatar, date of birth, gender**. |
| FR-ON-4 | Capture parent display details so "the community knows how to welcome you." |
| FR-ON-5 | Show a completion/welcome state ("You're all set!") and route into Home. |

**Use cases**
- UC-ON-1 — New user signs in with Google and creates the first child profile.
- UC-ON-2 — User selects an avatar and enters DOB/gender; data personalizes milestones & reminders.

**Business rules**
- BR-ON-1 — DOB drives the child's age, which drives milestone sets, activity/meal suggestions, and age-based checklists.
- BR-ON-2 — Gender captured at onboarding pre-fills the Health profile.

---

### 6.2 First-Time / Empty-State Experience
*Prototype: `firsttime.html`*

The app must be fully navigable before any data exists; every tab shows a guiding empty state rather than a blank screen.

| ID | Requirement |
|---|---|
| FR-FT-1 | Home shows the real parent name/photo, a "Complete setup" prompt, empty milestone rings, a blurred/locked Featured Memory, and Today's Activities & Meal Suggestions. |
| FR-FT-2 | Community is fully usable: Groups/Feeds toggle, discover groups, empty feed state, post composer. |
| FR-FT-3 | Checklist shows an intro/hero and age-appropriate starting content. |
| FR-FT-4 | Health shows the Health Monitoring dashboard with an empty profile (Gender pre-filled; Blood Type/Allergies = "NA"), the hub, and an empty Growth Overview. |
| FR-FT-5 | Each Health hub item (Health Notes, Doctor Visits, Documents, Vaccinations) opens a dedicated **empty-state sub-screen** with an illustration and an "Add" call to action. |
| FR-FT-6 | The global Add menu offers "Create New" → Add Memory / Add Feed. |

**Use cases**
- UC-FT-1 — A brand-new parent explores every tab and is prompted toward the next best action.
- UC-FT-2 — Parent taps a Health hub item and is shown how to begin recording that data.

**Business rules**
- BR-FT-1 — Empty states must present at least one clear "add" action.
- BR-FT-2 — First-time flow must visually match the populated app (same components, empty content).

---

### 6.3 Home / Dashboard
*Prototype: `home3.html`*

| ID | Requirement |
|---|---|
| FR-HM-1 | Greet the parent by name with their photo and a notification bell (with unread indicator). |
| FR-HM-2 | Show **milestone progress rings** across developmental domains: **Motor, Cognitive, Language, Social**. |
| FR-HM-3 | Show **Today's Activities** — a scrollable set of age-appropriate developmental activities, tagged by domain (Motor, Language, Social, Cognitive, Sensory). |
| FR-HM-4 | Show **Meal Suggestions** — age-appropriate meal ideas (e.g. breakfast/lunch), with detail. |
| FR-HM-5 | Show a **Featured Memory** card linking into Memories. |
| FR-HM-6 | Provide a **child switcher / profile menu** to move between children and open child management. |
| FR-HM-7 | Provide access to **Health Monitoring** (full dashboard sheet) and **sharing/invite** from the profile area. |
| FR-HM-8 | Global **Add** action (center nav button) to create a Memory or Feed. |

**Use cases**
- UC-HM-1 — Parent reviews milestone progress at a glance.
- UC-HM-2 — Parent browses today's suggested activities and marks/explores one.
- UC-HM-3 — Parent switches to another child and the dashboard reloads that child's data.
- UC-HM-4 — Parent opens the Health Monitoring sheet from Home.

**Business rules**
- BR-HM-1 — All dashboard content is child-specific and age-driven.
- BR-HM-2 — Activities and meals are suggestions, not logged events, unless the parent acts on them.

---

### 6.4 Memories
*Prototype: `memories.html`, `memory.html`; shared variants in `shared-memories.html`, `multi-child.html`*

| ID | Requirement |
|---|---|
| FR-ME-1 | Display a **timeline** of memories grouped by time period (This Week / This Month / Earlier) with collapsible groups and thumbnail previews when collapsed. |
| FR-ME-2 | **Add a memory**: photo/video, caption, date, optional milestone tag. |
| FR-ME-3 | Provide an in-app **photo cropper** (zoom, reposition, multi-photo) when adding. |
| FR-ME-4 | **Edit** and **Delete** an existing memory (row ⋯ menu → action sheet). |
| FR-ME-5 | Deleting a memory requires a **confirmation** dialog before removal. |
| FR-ME-6 | **Memory detail page**: full photo/caption, poster identity & time, **like** toggle, and a **comments** thread. |
| FR-ME-7 | Allow viewers (including shared family) to **like** and **add comments**; counts sync back to the timeline card. |
| FR-ME-8 | Surface **milestones to capture** as prompts within the memories experience. |
| FR-ME-9 | Multi-photo memories support a **photo slider** in detail view. |

**Use cases**
- UC-ME-1 — Parent adds a photo memory with caption and date.
- UC-ME-2 — Parent crops/zooms photos before saving.
- UC-ME-3 — Parent edits a caption / deletes a memory (with confirmation).
- UC-ME-4 — Family viewer opens a memory, likes it, and leaves a comment.
- UC-ME-5 — Any member views an existing memory's likes and comments.

**Business rules**
- BR-ME-1 — Any list a user can add to must also offer Edit and Delete.
- BR-ME-2 — Destructive delete must always confirm first; never delete on tap.
- BR-ME-3 — Likes/comments are attributed to the acting member and visible to members with access to that memory.

---

### 6.5 Community
*Prototype: `community.html`*

Community spans **Groups**, **Feeds**, **Chat**, **Experts**, **Member profiles**, **Payments**, and **Moderation**.

#### 6.5.1 Groups
| ID | Requirement |
|---|---|
| FR-CM-1 | Discover and **join** groups (e.g. Newborn Parents, Toddler Play, Feeding & Nutrition, Sleep & Naps, Milestones 0–1yr). |
| FR-CM-2 | Open a group to view its content and members. |
| FR-CM-3 | **Leave a group** (with confirmation). |

#### 6.5.2 Feeds
| ID | Requirement |
|---|---|
| FR-CM-4 | View a **feed** of posts from the community. |
| FR-CM-5 | **Create a post** via composer with text and photo attachment(s); photo cropper supported. |
| FR-CM-6 | **React** to posts and open **post detail**. |

#### 6.5.3 Chat
| ID | Requirement |
|---|---|
| FR-CM-7 | One-to-one / group **chat** with message send, typing indicator, and incoming messages. |
| FR-CM-8 | Message actions: **reply**, **react**, and a per-message menu. |
| FR-CM-9 | **Report** a message/user and **mark chat closed/resolved**. |

#### 6.5.4 Experts & Paid Consultation
| ID | Requirement |
|---|---|
| FR-CM-10 | Browse/consult verified **experts** ("Ask an Expert"). |
| FR-CM-11 | Expert consultation is gated by a **paywall / fee**. |
| FR-CM-12 | Collect structured **expert questions** before a consultation. |
| FR-CM-13 | Expert chat can deliver guidance and a **prescription (Rx)/suggestions**. |
| FR-CM-14 | Capture explicit **consent** (consent widget) where required. |

#### 6.5.5 Member Profiles & Sharing
| ID | Requirement |
|---|---|
| FR-CM-15 | View **member profiles**; load more members. |
| FR-CM-16 | **Share a profile**. |
| FR-CM-17 | **Search** the community. |
| FR-CM-18 | Optional **location/region** on profile (geo opt-in). |

#### 6.5.6 Payments
| ID | Requirement |
|---|---|
| FR-CM-19 | In-app **payment** flow supporting **card** and **UPI/app-based** methods, with card formatting/validation and UPI verification. |

**Use cases**
- UC-CM-1 — Parent discovers and joins a relevant group.
- UC-CM-2 — Parent posts a question with a photo to the feed and receives reactions.
- UC-CM-3 — Parent chats with another member; replies, reacts, or reports a message.
- UC-CM-4 — Parent pays a fee, submits questions, and consults an expert; receives guidance/Rx.
- UC-CM-5 — Parent leaves a group (confirmed) or reports inappropriate content.

**Business rules**
- BR-CM-1 — Paid expert actions require successful payment before the consultation proceeds.
- BR-CM-2 — Reporting and leave-group are moderation/safety actions; leave requires confirmation.
- BR-CM-3 — Community participation does not expose a user's private child data.
- BR-CM-4 — Consent must be captured and stored where the expert flow requires it.

---

### 6.6 Checklist
*Prototype: `checklist.html`*

Covers **age essentials**, **travel/trips**, **product recommendations/shop**, **wishlist**, and **reminders**.

| ID | Requirement |
|---|---|
| FR-CK-1 | Show **age-based essentials** checklist with per-category progress. |
| FR-CK-2 | **Add custom checklist items** (user's own). |
| FR-CK-3 | Create, edit, and **delete trips** (travel packing), with destination and trip-specific items. |
| FR-CK-4 | Show **recommended products** per checklist item/category. |
| FR-CK-5 | Provide a **buy** action / buy-link ("send buy link"), i.e. shop integration. |
| FR-CK-6 | Maintain a **wishlist** per child ("No wishes yet"). |
| FR-CK-7 | Set **reminders** for checklist items/trips. |
| FR-CK-8 | **Share** a checklist/list (share sheet, copy link). |

**Use cases**
- UC-CK-1 — Parent works through age essentials and marks items complete.
- UC-CK-2 — Parent creates a trip, adds packing items, and gets product suggestions.
- UC-CK-3 — Parent taps buy on a recommended product and receives a buy link.
- UC-CK-4 — Parent adds an item to the wishlist and sets a reminder.
- UC-CK-5 — Parent shares a checklist via link.

**Business rules**
- BR-CK-1 — Essentials are age-driven; travel lists are trip-driven.
- BR-CK-2 — Add implies Edit + Delete for custom items and trips; destructive delete confirms first.
- BR-CK-3 — Product recommendations may be unavailable for some items ("no suggestion") and must degrade gracefully.

---

### 6.7 Health Monitoring
*Prototype: `health.html`; dashboard in `home3.html`; first-time empty states in `firsttime.html`*

Central **Health Monitoring dashboard** with a profile card, a hub of sections, and a growth overview.

#### 6.7.1 Health Profile
| ID | Requirement |
|---|---|
| FR-HE-1 | Show child **profile**: name, age, **gender**, **blood type**, **allergies**. |
| FR-HE-2 | Edit **blood type** (selectable) and **allergies** (add/select; "None" when empty). |
| FR-HE-3 | Unset values display as **"NA"** and are tappable to add. |

#### 6.7.2 Growth
| ID | Requirement |
|---|---|
| FR-HE-4 | Track **growth** (weight & height over time) with a chart and "now" value. |
| FR-HE-5 | **Add a measurement** (age/date, weight, height); empty state prompts the first entry. |

#### 6.7.3 Health Notes
| ID | Requirement |
|---|---|
| FR-HE-6 | Record **health notes** typed by category: **Symptom, Measurement, Observation, Sleep, Feed, Reaction**, with structured fields per type. |
| FR-HE-7 | List, **filter**, paginate ("load older"), **edit**, and **delete** notes. |

#### 6.7.4 Doctor Visits
| ID | Requirement |
|---|---|
| FR-HE-8 | Record **doctor visits**: reason, date, doctor, notes. |
| FR-HE-9 | List, edit, and delete visits. |

#### 6.7.5 Documents
| ID | Requirement |
|---|---|
| FR-HE-10 | Store **documents** (reports, prescriptions): type, name, date, and file. |
| FR-HE-11 | **Upload/attach**, **open/preview**, **download**, filter, edit, and **remove** documents. |

#### 6.7.6 Vaccinations
| ID | Requirement |
|---|---|
| FR-HE-12 | Track a **vaccination** schedule/records with done/pending state and completion progress. |
| FR-HE-13 | Add/record a vaccination; filter the list. |

**Use cases**
- UC-HE-1 — Parent completes the health profile (blood type, allergies).
- UC-HE-2 — Parent adds a growth measurement and views the trend chart.
- UC-HE-3 — Parent logs a symptom note with structured details.
- UC-HE-4 — Parent records a doctor visit and attaches a report document.
- UC-HE-5 — Parent uploads a prescription and later downloads it.
- UC-HE-6 — Parent marks a vaccination as done and sees progress update.

**Business rules**
- BR-HE-1 — Health data is per-child and private; visibility follows the sharing scope.
- BR-HE-2 — Each record type supports Add + Edit + Delete; destructive actions confirm first.
- BR-HE-3 — Empty states must offer a clear "Add" action (see §6.2).

---

### 6.8 Sharing & Access Control
*Prototype: `home3.html` (invite), `shared-memories.html`, `multi-child.html`*

| ID | Requirement |
|---|---|
| FR-SH-1 | Invite family via a **share link and/or code**. |
| FR-SH-2 | Configure **link & code expiry**: Never / 24h / 7 days / 30 days / Custom. |
| FR-SH-3 | Grant **scoped access** per member (e.g. **Memories-only** vs **All features**). |
| FR-SH-4 | Show a **group/family detail** view listing members and their access. |
| FR-SH-5 | A scoped viewer sees **only** permitted features; non-permitted tabs are hidden/removed. |
| FR-SH-6 | A **Family Viewer** (Memories-only) gets a **view-first** experience: browse the memory timeline, like and comment; no "add memory," no bottom nav for other modules. |
| FR-SH-7 | A **multi-child** user can hold **full access to their own child** and a **view-only** shared child, switching between them via child tabs. |
| FR-SH-8 | Regenerate/expire/revoke invites. |

**Use cases**
- UC-SH-1 — Owner invites a grandparent with Memories-only access and a 7-day link expiry.
- UC-SH-2 — Grandparent opens the shared link, views the timeline, likes and comments.
- UC-SH-3 — A parent with their own child accepts a shared child and switches between the two.
- UC-SH-4 — Owner reviews who has access and revokes/changes a member's scope.

**Business rules**
- BR-SH-1 — Access scope is enforced for every module, server-side, not just hidden in UI.
- BR-SH-2 — A Memories-only viewer cannot access Health, Checklist, or Community for that child.
- BR-SH-3 — Expired/revoked links must immediately stop granting access.
- BR-SH-4 — A shared viewer's interactions (likes/comments) are attributed and visible to the owner.

---

### 6.9 Notifications
*Prototype: `notifications-design.html`*

One reminder is designed to render consistently across **three surfaces**.

| ID | Requirement |
|---|---|
| FR-NT-1 | Deliver a **push notification** (device). |
| FR-NT-2 | Render the same reminder on the **lock screen**. |
| FR-NT-3 | Render an **in-app notification** (toast/inbox). |
| FR-NT-4 | Notification bell on Home shows an **unread indicator**. |
| FR-NT-5 | Tapping a notification deep-links to the relevant screen (e.g. milestone, reminder, comment). |

**Use cases**
- UC-NT-1 — Parent receives a reminder as push + lock screen, opens it, and lands on the right screen.
- UC-NT-2 — Parent reviews in-app notifications from the bell.

**Business rules**
- BR-NT-1 — A single reminder must be consistent across all three surfaces.
- BR-NT-2 — Notification triggers include reminders, milestones, comments/likes, and expert/community activity.

---

## 7. Cross-Cutting Use-Case Catalogue

| UC ID | Actor | Use case | Module |
|---|---|---|---|
| UC-ON-1 | New User | Sign in with Google & create first child | Onboarding |
| UC-ON-2 | New User | Enter child DOB/gender/avatar | Onboarding |
| UC-HM-1 | Parent | Review milestone progress | Home |
| UC-HM-2 | Parent | Browse today's activities | Home |
| UC-HM-3 | Parent | Switch child | Home |
| UC-ME-1 | Parent | Add a photo memory | Memories |
| UC-ME-2 | Parent | Crop/zoom photos | Memories |
| UC-ME-3 | Parent | Edit/delete a memory | Memories |
| UC-ME-4 | Family Viewer | Like & comment on a memory | Memories |
| UC-CM-1 | Member | Join a group | Community |
| UC-CM-2 | Member | Post to feed with photo | Community |
| UC-CM-3 | Member | Chat: reply/react/report | Community |
| UC-CM-4 | Member/Expert | Paid expert consultation | Community |
| UC-CK-1 | Parent | Complete age essentials | Checklist |
| UC-CK-2 | Parent | Create trip & packing list | Checklist |
| UC-CK-3 | Parent | Buy a recommended product | Checklist |
| UC-HE-2 | Parent | Add growth measurement | Health |
| UC-HE-3 | Parent | Log a health note | Health |
| UC-HE-4 | Parent | Record a doctor visit | Health |
| UC-HE-5 | Parent | Upload/download a document | Health |
| UC-HE-6 | Parent | Record a vaccination | Health |
| UC-SH-1 | Owner | Invite family (scoped, expiry) | Sharing |
| UC-SH-3 | Multi-child parent | View own + shared child | Sharing |
| UC-NT-1 | Parent | Receive reminder across surfaces | Notifications |

---

## 8. Business Rules Summary

- **BR-GLOBAL-1** — All child data is **private by default**; visibility is governed by sharing scope.
- **BR-GLOBAL-2** — **Add implies Edit + Delete** for every user-managed list.
- **BR-GLOBAL-3** — Every **destructive delete** shows a confirmation dialog first; never delete on tap.
- **BR-GLOBAL-4** — Every **empty state** offers at least one clear "add/next" action.
- **BR-GLOBAL-5** — Content (milestones, activities, meals, essentials) is **age-driven** from the child's DOB.
- **BR-GLOBAL-6** — Paid actions require **successful payment** before fulfilment.
- **BR-GLOBAL-7** — Access scope is **enforced for every module** and revocable at any time.

---

## 9. Non-Functional Requirements

| ID | Category | Requirement |
|---|---|---|
| NFR-1 | Platform | Mobile-first; all flows usable at phone width. |
| NFR-2 | Performance | Timeline, feeds, and lists must paginate / load incrementally. |
| NFR-3 | Usability | Consistent components across empty and populated states; clear primary action per screen. |
| NFR-4 | Accessibility | Adequate contrast, tap-target sizing, and legible typography (target WCAG AA). |
| NFR-5 | Privacy & Security | Scoped access enforced server-side; media access controlled; consent captured where required. |
| NFR-6 | Reliability | Graceful degradation when recommendations/content are unavailable. |
| NFR-7 | Media | Support image/video upload, cropping, preview, and download. |
| NFR-8 | Payments | Support card + UPI/app-based methods with validation. |
| NFR-9 | Notifications | Consistent cross-surface delivery (push, lock screen, in-app). |
| NFR-10 | Internationalization | Architecture should not preclude future localization. |

---

## 10. Reporting & Analytics (recommended, future)

- Engagement: memories added, milestones updated, activities viewed, DAU/MAU.
- Growth/health: measurements logged, documents stored, vaccinations completed.
- Monetization: expert consultation conversion & revenue; product buy-link CTR.
- Virality: invites sent/accepted, group joins, posts/comments.
- Access: active shares by scope; revocations.

---

## 11. Risks & Mitigations

| Risk | Impact | Mitigation |
|---|---|---|
| Child-data privacy breach | High | Server-side scope enforcement; least-privilege sharing; audit of access. |
| Expert advice liability (medical) | High | Clear disclaimers; verified experts; consent capture; scope of advice defined. |
| Payment fraud / failures | Medium | Gateway validation; idempotent fulfilment on payment success. |
| Low activation (empty app) | Medium | Strong first-time empty states with guided actions. |
| Content moderation in community | Medium | Reporting, leave-group, and moderation tooling. |

---

## 12. Open Questions

- OQ-1 — Can a child have multiple **Owners** (true co-parenting), or one Owner + viewers?
- OQ-2 — Which **access scopes** beyond "Memories-only" and "All features" are offered (e.g. Health-only)?
- OQ-3 — Are experts **medical professionals**, and what regulatory constraints apply to Rx/advice?
- OQ-4 — Do recommended products use **affiliate** links, native checkout, or external redirect?
- OQ-5 — What are the exact **milestone data sets** and their sources (e.g. CDC/WHO)?
- OQ-6 — Data **retention/export/deletion** policy for a child's record.

---

## 13. Compliance & Privacy Considerations

- Child & family data must comply with applicable child-data and privacy regulations (e.g. GDPR, COPPA-equivalent where relevant).
- Explicit consent for expert consultations and data sharing.
- Right to export and delete a child's data (see OQ-6).
- Media stored with access control tied to sharing scope.

---

## 14. Glossary

| Term | Meaning |
|---|---|
| **Owner** | The parent who controls a child profile and its sharing. |
| **Scope / Scoped access** | The set of modules a shared member may access for a given child. |
| **Family Viewer** | A shared member, often Memories-only, who can view, like and comment. |
| **Memory** | A photo/video + caption + date, optionally tagged to a milestone. |
| **Milestone** | A developmental achievement across Motor/Cognitive/Language/Social domains. |
| **Hub** | The Health Monitoring section launcher (Notes/Visits/Documents/Vaccinations). |
| **Expert** | A verified consultant offering paid guidance in Community. |

---

## 15. Screen Inventory (Prototype Traceability)

| Prototype file | Screen / flow | Covered in |
|---|---|---|
| `index.html` | Prototype directory / entry point | — |
| `onboarding.html` | Splash, intro, Google sign-in, child setup | §6.1 |
| `firsttime.html` | First-time empty-state experience (all tabs + Health sub-screens) | §6.2 |
| `home3.html` | Home dashboard, child switcher, Health Monitoring, invite/sharing | §6.3, §6.7, §6.8 |
| `memories.html` | Memory timeline, add/edit/delete, cropper | §6.4 |
| `memory.html` | Memory detail: slider, likes, comments | §6.4 |
| `community.html` | Groups, feeds, chat, experts, profiles, payments, moderation | §6.5 |
| `checklist.html` | Age essentials, trips, products, wishlist, reminders | §6.6 |
| `health.html` | Health records: profile, growth, notes, visits, documents, vaccinations | §6.7 |
| `shared-memories.html` | Family Viewer (Memories-only) scoped flow | §6.8 |
| `multi-child.html` | Own child (full) + shared child (view-only) | §6.8 |
| `notifications-design.html` | Notifications across push, lock screen, in-app | §6.9 |

---

*End of document — BRD v1.0. This document is derived from the current interactive prototype and should be revised as the product evolves.*
