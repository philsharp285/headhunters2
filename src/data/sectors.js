const SECTORS = [
  {
    id: 'financial-services',
    icon: '💰',
    name: 'Financial Services',
    desc: 'Banking, insurance, asset management, fintech',
    intro: `Financial services remains one of the most active sectors for executive search in the UK. London's position as a global financial centre means demand for senior talent in banking, investment management, insurance, and fintech is consistently high — and the most sought-after executives are almost never actively looking for a new role.

The sector spans an enormous range of organisations: global investment banks, challenger banks, Lloyd's market insurers, asset managers, private equity firms, fintech scale-ups, and payment infrastructure businesses. Each has distinct cultural norms, regulatory requirements, and leadership expectations. A search firm without genuine sector depth will struggle to navigate these distinctions or to credibly represent a client organisation to senior candidates who can instantly identify superficial sector knowledge.

Regulatory complexity — FCA and PRA oversight, SM&CR accountability requirements, and the ongoing scrutiny of remuneration structures — adds a further dimension to senior hiring in financial services. Search firms operating in this sector must understand not just the commercial talent market but the regulatory framework within which executives operate.`,
    roles: [
      'Chief Executive Officer',
      'Chief Financial Officer',
      'Chief Risk Officer',
      'Chief Investment Officer',
      'Chief Compliance Officer',
      'Managing Director, Investment Banking',
      'Head of Wealth Management',
      'Chief Technology Officer',
    ],
    challenges: `The primary challenge in financial services executive search is the depth of off-limits restrictions. The largest search firms — who have placed extensively across the sector — carry significant pools of individuals they cannot approach for their current clients. This means market coverage can be materially narrower than it appears. Regulatory constraints under SM&CR also add complexity to senior appointments, as candidates must meet fit and proper standards and some roles require regulatory pre-approval. Compensation structures — particularly deferred bonus, carried interest, and LTIP arrangements — require careful management during offer negotiation.`,
    whySearch: `The passive nature of the senior financial services talent market makes executive search the only reliable route to the best candidates. The most capable CFOs, CROs, and divisional MDs are performing well and are not browsing job boards. A well-connected search firm with current relationships across the sector can reach these individuals directly, present the opportunity compellingly, and manage the complex compensation conversation that inevitably follows.`,
    fees: `Retained fees in financial services typically fall in the range of 28%–35% of base salary, reflecting the seniority and complexity of most mandates. For C-suite appointments at major institutions, fees at the higher end of this range are standard. Expenses of 10%–15% of the professional fee are charged additionally.`,
  },
  {
    id: 'technology-digital',
    icon: '💻',
    name: 'Technology & Digital',
    desc: 'SaaS, fintech, cybersecurity, AI/ML',
    intro: `The technology sector presents some of the most competitive and rapidly evolving talent markets in UK executive search. Demand for senior technology leadership — CTOs who can scale engineering organisations, CPOs who can build product culture from scratch, and CEOs who can navigate the transition from founder-led to professionally managed — consistently outstrips supply.

The sector encompasses an unusually wide range of organisational types: venture-backed startups, PE-backed scale-ups, listed technology businesses, technology divisions of large corporates, and pure-play digital businesses across every vertical. The cultural and structural requirements for leadership differ substantially between these contexts, and a CTO who thrives in a 50-person startup may be entirely wrong for a 2,000-person enterprise technology division.

AI and machine learning have added a further dimension to technology executive search, creating demand for a new generation of senior leaders who combine deep technical understanding with commercial acumen and organisational leadership capability. This intersection of skills is rare, and the competition for individuals who combine them is intense.`,
    roles: [
      'Chief Technology Officer',
      'Chief Product Officer',
      'Chief Data Officer',
      'VP Engineering',
      'Head of Cybersecurity',
      'Chief AI Officer',
      'VP Product Management',
      'Engineering Director',
    ],
    challenges: `Speed is the defining challenge in technology executive search. Compensation expectations are high and rising, competing offers are common, and the window between a candidate expressing interest and accepting a competing offer can be narrow. The best CTOs and CPOs are often approached multiple times a week and have well-developed instincts for distinguishing serious opportunities from noise. A slow or poorly managed search process will lose strong candidates.`,
    whySearch: `Technology sector leaders — particularly in engineering, product, and data — are almost exclusively passive candidates. The most capable individuals are building things they care about and are not responding to job advertisements. Reaching them requires a search firm with genuine relationships in the technology ecosystem, the credibility to engage senior engineers and product leaders as peers, and the speed to manage a process that matches the pace of the sector.`,
    fees: `Technology executive search fees typically fall in the range of 25%–33% of base salary, with total compensation packages (including equity) used as the base in some cases. For early-stage companies, creative fee structures — including equity components — are sometimes negotiated. Minimum fees of £30,000–£35,000 apply at most reputable firms.`,
  },
  {
    id: 'healthcare-life-sciences',
    icon: '🏥',
    name: 'Healthcare & Life Sciences',
    desc: 'Pharma, biotech, medtech, NHS',
    intro: `Healthcare and life sciences executive search spans two very different worlds: the commercial life sciences sector — pharmaceutical companies, biotech startups, medical device manufacturers, and clinical research organisations — and the NHS and broader public health system, which operates under entirely different governance, culture, and compensation norms.

The commercial life sciences sector is characterised by highly specialised technical roles at senior level, global talent pools (particularly for R&D leadership in pharma and biotech), and the need for executives who can navigate complex regulatory environments including MHRA, EMA, and FDA approval processes. The UK's position as a leading centre for pharmaceutical research and biotech innovation — anchored by Cambridge, Oxford, and the Golden Triangle — creates significant demand for scientific leadership with commercial capability.

The NHS and healthcare provider sector presents distinct challenges: constrained pay scales relative to the private sector, complex political environments, and the need for leaders who combine clinical credibility with organisational management capability. Executive search in this context requires a different approach — understanding the NHS leadership landscape, working within Fit and Proper Person requirements, and navigating the sometimes lengthy governance processes that surround senior public sector appointments.`,
    roles: [
      'Chief Medical Officer',
      'Chief Scientific Officer',
      'VP Clinical Development',
      'Medical Director',
      'Head of Regulatory Affairs',
      'NHS Trust Chief Executive',
      'Commercial Director, Pharma',
      'VP Market Access',
    ],
    challenges: `The global nature of life sciences talent pools creates complexity: many of the most qualified candidates for UK roles are based in the US, Europe, or Asia, and managing international searches requires search firms with genuine global reach. For NHS roles, the structured governance and approval processes add time and complexity that must be planned for. In both sectors, the intersection of technical expertise and leadership capability narrows the candidate pool significantly.`,
    whySearch: `Senior life sciences and healthcare executives are highly specialised and largely passive. The most capable Chief Medical Officers, VPs of Clinical Development, and NHS Trust CEOs are rarely available through conventional channels. Executive search provides access to the global talent pool, the depth of assessment required for high-stakes clinical and scientific leadership roles, and the ability to manage complex, multi-stage appointment processes with appropriate discretion.`,
    fees: `Healthcare and life sciences fees typically fall in the range of 27%–33% of base salary. For NHS appointments, fees must comply with procurement frameworks, which can constrain both the fee level and the selection process. Expenses are charged additionally at 10%–15% of the professional fee.`,
  },
  {
    id: 'manufacturing-engineering',
    icon: '🏭',
    name: 'Manufacturing & Engineering',
    desc: 'Industrial, engineering, supply chain',
    intro: `Manufacturing and engineering remains a substantial employer of senior talent in the UK, spanning aerospace and defence, automotive, industrial equipment, food and beverage production, and increasingly advanced manufacturing in sectors such as semiconductors, clean energy infrastructure, and pharmaceutical manufacturing.

The sector faces a persistent and well-documented shortage of senior engineering and operational leadership talent. The pipeline of technical graduates who develop into commercially capable senior leaders is narrower than in other sectors, and the most experienced manufacturing CEOs, operational directors, and supply chain leaders are in continuous demand across multiple organisations simultaneously.

Digital transformation — including Industry 4.0, automation, and advanced analytics — has added new dimensions to manufacturing leadership requirements. Organisations increasingly need senior leaders who combine deep operational experience with the ability to lead technology-enabled transformation programmes. This combination is rare and commands significant market premium.`,
    roles: [
      'Chief Operating Officer',
      'Manufacturing Director',
      'Supply Chain Director',
      'VP Operations',
      'Engineering Director',
      'Head of Continuous Improvement',
      'Plant General Manager',
      'Chief Procurement Officer',
    ],
    challenges: `Geographic dispersion is a practical challenge in manufacturing search: the best candidates for a plant leadership role may be based anywhere in the UK or internationally, and relocation resistance is higher than in service sectors. The combination of technical depth and commercial leadership capability that senior manufacturing roles require narrows the candidate pool substantially, and competing approaches from private equity portfolio companies — who often pay premium multiples of market — create further competitive pressure.`,
    whySearch: `The manufacturing and engineering talent market is small and specialist. The best operational leaders know each other, are known to their competitors, and are rarely visible in the open market. A search firm with genuine sector relationships can map the entire relevant market, approach candidates with credibility, and assess the technical competency claims that are central to manufacturing leadership roles. Advertising-based approaches consistently underperform in this sector.`,
    fees: `Manufacturing and engineering search fees typically fall in the range of 25%–32% of base salary, reflecting a slightly broader candidate pool than the most specialist sectors. For board-level and C-suite appointments, fees at the higher end of this range are standard.`,
  },
  {
    id: 'energy-infrastructure',
    icon: '⚡',
    name: 'Energy & Infrastructure',
    desc: 'Renewables, utilities, infrastructure',
    intro: `The energy sector is undergoing its most significant structural transformation in a generation. The transition to net zero is reshaping every part of the energy system — from offshore wind and solar development to grid infrastructure, battery storage, hydrogen production, and the electrification of heat and transport. This transformation is creating extraordinary demand for senior talent who can lead complex, capital-intensive businesses in a rapidly evolving regulatory and commercial environment.

Traditional energy businesses — oil and gas majors, utilities, and energy traders — are simultaneously managing their legacy operations and building new capabilities in low-carbon energy. The leadership requirements for this transition are distinctive: executives who understand the technical complexity of energy systems, the regulatory and policy landscape, and the financial structures used to fund large-scale infrastructure projects.

Infrastructure — including regulated utilities, transport infrastructure, water, and telecommunications networks — presents related but distinct talent requirements. Asset management, regulatory relationships, and long-term capital allocation decisions dominate the leadership agenda, and candidates need the specific combination of operational, financial, and regulatory expertise that the sector demands.`,
    roles: [
      'Chief Executive Officer',
      'Chief Commercial Officer',
      'Development Director',
      'Head of Renewables',
      'Regulatory Affairs Director',
      'Infrastructure Finance Director',
      'VP Grid Development',
      'Head of Energy Trading',
    ],
    challenges: `The energy transition has created a talent gap: the combination of technical energy expertise and commercially sophisticated leadership required for leading renewable energy businesses is in short supply. Many of the most qualified individuals are being pursued simultaneously by multiple major developers and infrastructure funds. The international nature of the sector — where major projects and employers span multiple geographies — means search firms need genuine global reach.`,
    whySearch: `Senior energy and infrastructure executives are highly specialised and almost invariably passive candidates. The most capable development directors, regulatory specialists, and energy transition leaders are central to their current organisations' strategies and are not responding to unsolicited approaches from unknown recruiters. Executive search, conducted by consultants with genuine sector relationships and technical credibility, is the only reliable route to this talent pool.`,
    fees: `Energy and infrastructure search fees typically fall in the 27%–33% range of base salary. For major infrastructure transactions and C-suite appointments, fees at the higher end are standard. Infrastructure fund clients often negotiate framework agreements for multiple searches annually.`,
  },
  {
    id: 'consumer-retail',
    icon: '🛒',
    name: 'Consumer & Retail',
    desc: 'FMCG, retail, ecommerce, hospitality',
    intro: `Consumer and retail executive search encompasses one of the broadest talent markets in UK business — from global FMCG companies and major grocery retailers to direct-to-consumer ecommerce brands, leisure and hospitality businesses, and fast-growth consumer startups. The common thread is proximity to the end consumer and the commercial instinct required to understand and respond to rapidly shifting consumer behaviour.

The sector has undergone dramatic structural change over the past decade. Ecommerce has disrupted traditional retail models, demanding leaders who understand digital acquisition, customer lifetime value, and the operational complexity of omnichannel fulfilment. The FMCG sector faces pressure from own-label growth, sustainability demands, and the shift to D2C — requiring commercially sophisticated leaders who can navigate both traditional trade relationships and direct digital channels.

Private equity has been a significant driver of senior hiring activity in consumer and retail, with PE-backed portfolio companies requiring transformational leaders who can accelerate growth, professionalise operations, and prepare businesses for exit. This PE context demands a specific type of senior executive: commercially aggressive, data-driven, and experienced in the concentrated ownership environment.`,
    roles: [
      'Chief Executive Officer',
      'Chief Commercial Officer',
      'Marketing Director',
      'Trading Director',
      'Digital & Ecommerce Director',
      'Supply Chain Director',
      'Customer Experience Director',
      'International Expansion Director',
    ],
    challenges: `The consumer and retail sector is large and diverse, which makes sector claim by search firms easier to make and harder to substantiate. The best candidates — commercially sharp brand builders and digital-native leaders — are in demand across multiple sectors and are frequently approached. Speed of process is important: a slow consumer retail search will lose candidates to competing opportunities. Private equity clients also require search firms to understand the PE investment thesis and what "value creation" means in the context of a specific portfolio company.`,
    whySearch: `Senior consumer and retail leaders who have demonstrated the ability to build brands, drive profitable growth, or lead successful turnarounds are rare and consistently in demand. The most effective CEOs, CMOs, and commercial directors are fully employed and not visible in the open market. Executive search reaches them directly, assesses their commercial track record rigorously, and manages the complexity of moving from a stable, well-compensated role into a new opportunity.`,
    fees: `Consumer and retail search fees typically fall in the range of 25%–32% of base salary. For boutique and specialist consumer brands, minimum fees of £30,000–£35,000 apply. PE clients frequently negotiate framework rates for portfolio-wide search support.`,
  },
  {
    id: 'property-construction',
    icon: '🏗️',
    name: 'Property & Construction',
    desc: 'Real estate, housebuilding, construction',
    intro: `Real estate and construction executive search covers a wide range of organisations: major housebuilders, commercial property developers, property investment and asset management businesses, construction contractors, infrastructure specialists, and built environment consultancies. The sector is characterised by long project cycles, complex stakeholder environments, and leadership roles that combine commercial acumen with technical and regulatory knowledge.

The UK housing market — persistently supply-constrained and subject to ongoing planning and policy reform — creates sustained demand for experienced development and land directors, planning specialists, and housing delivery leaders. Major housebuilders and housing associations compete for a relatively small pool of senior talent with the specific combination of skills required: commercial development experience, planning expertise, and community stakeholder management.

Commercial real estate — investment, asset management, and major development — has its own distinct talent market, dominated by a relatively small network of senior professionals who have built their careers in the City and institutional property markets. This market is characterised by strong networks, discreet approaches, and a preference for personal introduction over formal search processes.`,
    roles: [
      'Chief Executive Officer',
      'Land Director',
      'Development Director',
      'Chief Financial Officer',
      'Head of Asset Management',
      'Planning Director',
      'Construction Director',
      'Head of Sustainability',
    ],
    challenges: `The property and construction talent market is heavily relationship-driven. Senior professionals tend to know each other well and move within established networks. For search firms, this means genuine sector relationships are essential — cold approaches from consultants without credibility in the market are typically ineffective. Cyclicality adds further complexity: in downturns, talent supply increases but organisations' appetite for search investment falls; in strong markets, the best candidates have multiple options simultaneously.`,
    whySearch: `The compact, network-driven nature of senior property and construction talent means that only search firms with genuine, current relationships in the sector can reach the most sought-after candidates. Land directors, development directors, and senior asset managers are rarely available through advertising or cold outreach. A well-connected search firm operates as a trusted intermediary in a market where personal relationships carry significant weight.`,
    fees: `Property and construction search fees typically fall in the range of 25%–30% of base salary. For major commercial real estate and housebuilder CEO appointments, fees at the higher end of this range apply.`,
  },
  {
    id: 'not-for-profit',
    icon: '🤝',
    name: 'Not-for-Profit & Social Enterprise',
    desc: 'Charities, social enterprise, impact',
    intro: `Not-for-profit and social sector executive search requires a distinctive approach. The sector spans major national charities, international development organisations, housing associations, social enterprises, foundations, and mission-driven businesses. The common thread is purpose — but the commercial and organisational complexity of major not-for-profit organisations frequently rivals that of substantial commercial businesses.

Senior leaders in the charitable sector must combine genuine commitment to mission with the commercial and financial rigour required to manage large budgets, complex stakeholder relationships, and regulatory obligations. The most effective charity CEOs and directors are not interchangeable with their commercial equivalents — they need to understand the specific governance structures, fundraising dynamics, and beneficiary accountability frameworks that characterise the sector.

Trustee and board-level appointments represent a significant proportion of senior not-for-profit search activity. Finding board members who combine relevant expertise with genuine commitment to the organisation's mission — and who pass the complex skills audit that most charity boards now conduct — requires a search process designed specifically for the not-for-profit context.`,
    roles: [
      'Chief Executive Officer',
      'Director of Fundraising',
      'Director of Programmes',
      'Finance Director',
      'Director of Communications',
      'Head of Partnerships',
      'Director of Policy & Advocacy',
      'Board Trustee / Non-Executive',
    ],
    challenges: `Compensation is the perennial challenge in not-for-profit search. The sector increasingly needs leaders with commercial capability, but salary levels remain constrained by trustee governance, public perception, and funding model realities. This means some of the most capable candidates are unavailable — unwilling to take a material salary reduction — while others are motivated precisely by the mission alignment that commercial organisations cannot offer. Finding candidates for whom the mission is a genuine draw, rather than a consolation, requires careful assessment.`,
    whySearch: `Major charity and social enterprise appointments require the same rigour as any senior commercial hire. The best not-for-profit CEOs and directors are not actively looking, and the sector's relatively compact senior talent market means the most qualified individuals are known within it. A search firm with genuine not-for-profit sector experience can map this market credibly, manage board governance requirements, and assess mission alignment alongside commercial capability.`,
    fees: `Not-for-profit search fees are typically structured at 25%–30% of base salary, reflecting both the sector context and the salary levels involved. Many firms offer a modest social purpose discount. Procurement requirements and charity governance standards may constrain the selection and engagement process.`,
  },
  {
    id: 'professional-services',
    icon: '📚',
    name: 'Professional Services',
    desc: 'Consulting, legal, accounting, advisory',
    intro: `Professional services executive search encompasses management consulting firms, legal practices, accounting and audit firms, and specialist advisory businesses. The sector presents distinctive talent market dynamics: many senior roles are filled through internal partnership and promotion structures, and the most capable professionals are deeply embedded in their current firms — often with significant financial and social ties that make them difficult to move.

The growth of boutique consulting, specialist legal firms, and advisory businesses — particularly those operating at the intersection of technology, regulation, and professional expertise — has created significant demand for senior leaders who can build and scale professional service businesses. These organisations need executives who combine technical credibility with commercial development capability and the ability to attract and retain high-performing professional talent.

Legal services has undergone significant structural change, with the growth of alternative legal service providers, in-house legal team expansion, and the emergence of new law firm models creating demand for commercial leaders with legal expertise. These hybrid roles — combining legal knowledge with business development and commercial management — represent some of the most active mandates in professional services search.`,
    roles: [
      'Managing Partner',
      'Chief Executive Officer',
      'Practice Director',
      'Head of Business Development',
      'Chief Operating Officer',
      'Head of Strategy',
      'Client Service Director',
      'Chief People Officer',
    ],
    challenges: `Partnership and equity structures create complex financial ties that make senior moves in professional services unusually difficult to negotiate. Non-solicitation and non-compete agreements — while often unenforceable in their broadest form — create genuine practical barriers. The personal nature of professional service businesses means that candidate moves can threaten client relationships, adding sensitivity that requires careful management throughout the search process.`,
    whySearch: `Senior professional services leaders are among the most embedded and difficult-to-move individuals in the UK talent market. Approaching a Managing Partner or Practice Director requires a consultant with genuine credibility in the sector, the ability to make a compelling case for the opportunity, and the experience to manage complex financial and relational negotiations. Advertising-based approaches are ineffective — the best candidates are not looking and would not respond if they were.`,
    fees: `Professional services search fees typically fall in the range of 27%–33% of base salary. For partnership and managing partner searches, fee structures sometimes include a premium reflecting the additional complexity and sensitivity of the engagement.`,
  },
  {
    id: 'education-public-sector',
    icon: '🎓',
    name: 'Education & Public Sector',
    desc: 'Higher education, government, charities',
    intro: `Education and public sector executive search covers a wide range of organisations: universities and higher education institutions, multi-academy trusts and schools, central and local government bodies, NHS leadership, regulatory and inspection bodies, and arms-length government organisations. Each segment has distinct governance structures, appointment processes, and compensation frameworks that require specialist knowledge.

Higher education presents a particularly active search market. The pressure on UK universities to compete internationally for research talent, to build commercially sustainable operations, and to navigate the regulatory and reputational challenges of the current environment has created strong demand for senior leaders who can operate at the intersection of academic culture and organisational management. Vice-Chancellor, Provost, and Pro-Vice-Chancellor appointments represent some of the most complex searches in the public sector context.

Multi-academy trusts have emerged as a significant employer of senior educational talent, requiring CEOs and executive directors who can build organisational capability across multiple schools while maintaining educational quality and stakeholder trust. These are genuinely complex leadership roles requiring executives with the specific combination of educational credibility and organisational management skill.`,
    roles: [
      'Vice-Chancellor / Principal',
      'CEO, Multi-Academy Trust',
      'Director General',
      'Chief Executive, NDPB',
      'Director of Finance',
      'Pro-Vice-Chancellor',
      'Director of Strategy',
      'Chief People Officer',
    ],
    challenges: `Public sector appointment processes are typically longer, more governance-intensive, and more politically complex than commercial searches. Stakeholder involvement — academic senates, governing bodies, ministerial oversight — adds layers of approval that can extend timelines significantly. Public sector pay frameworks constrain compensation and can make it difficult to attract candidates from comparable commercial roles, while the reputational and public accountability dimensions of senior public sector roles require careful candidate assessment.`,
    whySearch: `The complexity and governance requirements of senior public sector appointments make executive search particularly valuable. A well-connected search firm can manage the stakeholder engagement required, assess candidates against both the technical requirements and the cultural expectations of public sector leadership, and support the extended decision-making process that characterises major public appointments. Discretion is essential — public sector searches are often highly sensitive.`,
    fees: `Education and public sector search fees are typically structured at 25%–30% of base salary. Procurement frameworks — including Crown Commercial Service arrangements and sector-specific procurement requirements — may constrain selection and fee structures. Some institutions require competitive tender processes for senior search mandates.`,
  },
  {
    id: 'private-equity-vc',
    icon: '🚀',
    name: 'Private Equity & VC',
    desc: 'PE-backed portfolio companies, growth equity',
    intro: `Private equity and venture capital executive search is one of the most commercially sophisticated and relationship-intensive segments of the UK search market. PE-backed businesses require a specific type of senior leader: commercially aggressive, accustomed to the intensity and pace of PE ownership, experienced in value creation planning, and capable of performing under the close scrutiny of an active investor board.

The PE talent market operates differently from other segments. Investment directors and operating partners at major PE houses maintain active relationships with a pool of portfolio company executives, and many senior appointments in PE-backed businesses are made through these networks rather than formal search processes. Where formal search is commissioned, it is typically for the most critical roles — CEO succession, CFO for a business approaching exit, or the first professional management team for a founder-led business receiving its first institutional investment.

Venture capital portfolio companies present distinct requirements: leaders who can scale fast-growth businesses, often from a relatively early stage, who combine startup agility with the process discipline required as organisations grow. The CEO of a Series B SaaS business needs a very different profile from the CEO of a PE-backed industrial business — and a search firm that conflates the two is unlikely to serve either client well.`,
    roles: [
      'Portfolio Company CEO',
      'Chief Financial Officer',
      'Chief Revenue Officer',
      'Chief Operating Officer',
      'VP Sales',
      'Chief Product Officer',
      'Non-Executive Director',
      'Operating Partner',
    ],
    challenges: `Speed and selectivity are the defining challenges of PE-backed search. Investment directors expect rapid processes — a slow search is commercially costly in an environment where value creation timelines are compressed. At the same time, the quality bar for portfolio company leadership is extremely high: a wrong hire in a PE context can materially affect the investment thesis and exit value. The combination of speed and rigour required is demanding for search firms.`,
    whySearch: `PE and VC investors commission executive search for their most important portfolio appointments precisely because the cost of getting it wrong is so high and the timeline pressure is so significant. A search firm with genuine PE sector relationships — understanding what "100-day plans," EBITDA targets, and exit preparation mean in practice — can reach the pool of experienced portfolio company executives who have delivered in this context before, and assess them against the specific requirements of the investment thesis.`,
    fees: `PE and VC search fees typically fall in the range of 28%–35% of base salary or total cash compensation. Many PE clients negotiate framework rates for portfolio-wide search programmes, typically achieving a 2%–3% discount on standard rates in exchange for volume commitment.`,
  },
  {
    id: 'media-communications',
    icon: '📡',
    name: 'Media & Communications',
    desc: 'Broadcasting, publishing, PR, digital media',
    intro: `Media and communications executive search spans an industry in continuous structural transformation. Traditional broadcasters, publishers, and advertising businesses are navigating the shift to digital-first models while facing competition from global technology platforms that have restructured the economics of content, distribution, and advertising. Senior leaders in this environment must combine deep media expertise with the ability to lead digital transformation at pace.

The sector encompasses broadcast media (television, radio, streaming), publishing (print and digital), advertising and media agencies, PR and communications firms, and the growing segment of content creator and influencer-driven businesses. Each segment has its own talent dynamics: the pool of experienced broadcast executives is compact and well-networked; the advertising holding company talent market is highly mobile and internationally oriented; digital media is characterised by younger, faster-moving talent with higher expectations of organisational agility.

Communications and public affairs — advising organisations on reputation, regulatory relationships, and stakeholder management — has grown substantially as a professional services segment, driven by the increasing complexity of operating in a digitally amplified, politically volatile environment. Senior communications directors and public affairs leaders are in consistently high demand across both corporate and agency contexts.`,
    roles: [
      'Chief Executive Officer',
      'Content Director',
      'Chief Digital Officer',
      'Commercial Director',
      'Editor-in-Chief',
      'Head of Communications',
      'Director of Public Affairs',
      'Chief Marketing Officer',
    ],
    challenges: `Creative industries present specific assessment challenges: the track record of a media or communications leader is often difficult to evaluate objectively, particularly where commercial success is entangled with brand or talent that was not portable. The compact and highly networked nature of senior media markets means that candidate moves are visible quickly, requiring careful discretion management. International competition — particularly from US streaming and tech businesses — for top media talent adds compensation pressure.`,
    whySearch: `Senior media and communications executives are typically well-embedded in their current organisations and networks. The most effective broadcast leaders, publishing directors, and communications chiefs are rarely available through conventional channels. Executive search, conducted by consultants with genuine relationships in the media ecosystem, provides access to this compact talent pool and the credibility to have honest conversations about opportunities that might not be visible through any other channel.`,
    fees: `Media and communications search fees typically fall in the range of 25%–32% of base salary. For major broadcasting and publishing CEO appointments, fees at the higher end of this range are standard.`,
  },
  {
    id: 'automotive-mobility',
    icon: '🚗',
    name: 'Automotive & Mobility',
    desc: 'OEM, EV transition, mobility platforms',
    intro: `The automotive sector is undergoing the most profound transformation in its history. The transition to electric vehicles, the rise of software-defined mobility, and the emergence of shared and autonomous transport platforms are restructuring both the product and the talent requirements of a sector that has traditionally been dominated by mechanical and manufacturing expertise.

UK automotive — encompassing OEM operations, Tier 1 and Tier 2 suppliers, luxury vehicle manufacturers, and the growing EV and mobility technology ecosystem — requires a new generation of senior leaders who can navigate this transition. The most acute demand is at the intersection of traditional automotive engineering and new technology capabilities: leaders who understand the mechanical and regulatory complexity of vehicle manufacturing but can also lead software development, battery technology, and digital customer experience transformation.

Mobility platforms — ride-hailing, micro-mobility, fleet electrification, and connected vehicle services — represent a newer and faster-growing segment, requiring entrepreneurial leaders with technology backgrounds who are willing to engage with the regulatory and physical infrastructure complexity of transport.`,
    roles: [
      'Chief Executive Officer',
      'VP Engineering',
      'Head of Electrification',
      'Chief Technology Officer',
      'Managing Director, UK Operations',
      'Head of Connected Vehicles',
      'Commercial Director',
      'Head of Supply Chain',
    ],
    challenges: `The automotive talent market is internationally competitive — the best EV and software-defined vehicle leaders are sought by OEMs globally, and compensation packages at major manufacturers (particularly US and German OEMs) can be difficult for UK businesses to match. The transition from ICE to EV leadership also creates generation tension: experienced automotive executives who have built careers in combustion engine development must adapt to an EV-first world, while EV-native leaders may lack the manufacturing and supply chain depth that large-scale production requires.`,
    whySearch: `The convergence of traditional automotive and technology talent markets creates a complex search environment that generalist recruiters are poorly equipped to navigate. The best candidates — those who combine EV technical expertise with manufacturing leadership experience — are extremely rare and under continuous competitive pressure. A search firm with genuine automotive sector relationships and the technical credibility to assess EV transition capability is essential for the most critical appointments.`,
    fees: `Automotive executive search fees typically fall in the range of 25%–32% of base salary. For OEM-level CEO and VP appointments, fees at the higher end are standard. International search components for global talent pool access may carry a premium.`,
  },
  {
    id: 'aerospace-defence',
    icon: '✈️',
    name: 'Aerospace & Defence',
    desc: 'Commercial aerospace, defence contractors, MRO, aviation',
    intro: `The UK aerospace and defence sector is one of the most technically sophisticated and strategically critical industries in the economy. Leadership appointments combine deep technical expertise, security clearance requirements, government stakeholder management, and long-cycle commercial delivery. The sector spans prime contractors, tier-1 suppliers, MRO, commercial aviation, and emerging space-adjacent technologies.`,
    roles: [
      'CEO / Managing Director',
      'COO / Operations Director',
      'Engineering Director',
      'Programme Director',
      'Commercial Director / BD',
      'CFO / Finance Director',
      'Supply Chain Director',
      'Head of Government Relations',
    ],
    challenges: `Aerospace and defence leadership requires a rare combination of technical credibility, government relations acumen, and commercial delivery at scale. Security clearance requirements (SC / DV) can extend timelines. The talent pool is relatively small, highly networked, and concentrated in specific geographic clusters.`,
    whySearch: `The best aerospace and defence leaders are deeply embedded in long-term programmes and loyal to their current organisations. Passive candidates dominate the senior talent pool. Reaching them requires sector credibility, an established network, and a nuanced understanding of career progression within the defence industrial base.`,
    fees: `Retained fees typically fall in the range of 25%–33% of total compensation.`,
  },
  {
    id: 'space-security',
    icon: '🛰️',
    name: 'Space & Security',
    desc: 'Space technology, satellites, cyber security, national security',
    intro: `Space and security is the UK's fastest-growing strategic sector. The convergence of commercial space, satellite communications, cyber defence, and national security infrastructure has created a new category of senior leadership demand. Roles combine deep technical expertise, security clearance, investor relations, and government stakeholder management in a uniquely complex operating environment.`,
    roles: [
      'CEO / Founder-CEO',
      'CTO / Chief Engineer',
      'COO / Operations Director',
      'Chief Scientist / CSO',
      'Commercial Director',
      'CFO (dual-use / defence)',
      'Head of Government & Strategy',
      'VP Engineering (Space Systems)',
    ],
    challenges: `Space and security leadership requires extremely rare skill combinations — technical depth in aerospace or cyber, credibility with government and defence customers, investor or board management capability, and often Developed Vetting (DV) clearance. The addressable candidate pool is genuinely small and globally competitive. Many of the best candidates are in the US or continental Europe.`,
    whySearch: `This is one of the most challenging talent markets in the UK. The number of individuals with the right combination of space/cyber technical background, commercial leadership experience, and active security clearance is measured in dozens, not hundreds. Proactive, research-led executive search with international reach is essential. Advertising will not surface credible candidates.`,
    fees: `Retained fees typically fall in the range of 28%–35% of total compensation, reflecting scarcity and international competition.`,
  },
];

export default SECTORS;
