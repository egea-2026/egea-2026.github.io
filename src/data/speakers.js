// Speaker information and submitted talk text.
// Titles and abstracts are copied verbatim; null means the detail was not supplied.
export const speakers = [
  {
    id: "christopher-brav",
    name: "Christopher Brav",
    affiliation:
      "Shanghai Institute for Mathematics and Interdisciplinary Sciences",
    title: String.raw`Noncommutative geometry at infinity`,
    abstract: String.raw`In topology, one studies the boundary at infinity of a nice topological space in terms of the limit of complements of compact subsets. In algebraic geometry, there are at least two different approaches to defining the boundary at infinity: via some form of rigid analytic geometry (for example, solid algebraic geometry of Clausen–Scholze), and another via noncommutative geometry of differential graded categories, due to Efimov. We give a unified construction of the boundary at infinity compatible with both the analytic and noncommutative points of view. We motivate our construction by focusing on an explicit example that can be viewed from both topological, symplectic, and algebraic points of view, namely that of local systems on the circle.  Finally, we explain how taking Hochschild homology of our construction recovers Rabinowitz–Floer homology, together with natural 2d topological field theory operations on it. This is joint work in progress with Yuan Gao and Yingdi Qin.`,
  },
  {
    id: "chenjing-bu",
    name: "Chenjing Bu",
    affiliation: "University of Oxford",
    title: String.raw`The structure of induction and restriction for sheaves on stacks`,
    abstract: String.raw`Induction and restriction functors and maps are the underlying structure of many important constructions in enumerative geometry such as Hall algebras and wall-crossing formulas. I will talk about some of their interesting structures for categories of sheaves on stacks thanks to recent progress in intrinsic enumerative geometry developed in previous joint works. These include a compatibility formula in the form of a Mackey filtration, and a decomposition of the coherent sheaf category with inclusions and projections given by induction and restriction functors. I will also comment on potential applications to various versions of categorical Langlands correspondences. This talk is based on joint works with Lucien Hennecart, Tudor Pădurariu, and Yukinobu Toda.`,
  },
  {
    id: "lucien-hennecart",
    name: "Lucien Hennecart",
    affiliation: "Centre National de la Recherche Scientifique",
    title: String.raw`On tautological generation of BPS cohomology`,
    abstract: String.raw`I will discuss tautological generation of BPS cohomology in several 2-Calabi–Yau settings and explain some of its consequences. BPS cohomology captures a distinguished contribution to the Borel–Moore homology of the moduli stack of objects in a 2-Calabi–Yau category. An important example is provided by compactly supported coherent sheaves on symplectic surfaces. In this setting, Markman established tautological generation of the cohomology of smooth moduli spaces. I will explain how we extend this result to BPS cohomology of possibly singular moduli spaces. This talk is based on joint work with Ben Davison, Tasuki Kinjo, Olivier Schiffmann, and Eric Vasserot.`,
  },
  {
    id: "adeel-khan",
    name: "Adeel Khan",
    affiliation: "Academia Sinica",
    title: String.raw`Microsheaves and cohomological Donaldson-Thomas theory`,
    abstract: String.raw`I will explore an analogy between the perverse sheaf of vanishing cycles on a $(-1)$-shifted symplectic space, and the category of microsheaves on an exact symplectic manifold. One can make this analogy surprisingly precise.  For example, there is a microsheaf analogue of the Joyce conjecture on $(-1)$-shifted Lagrangian classes, whose proof I will sketch under a global presentation hypothesis. This is a report on work in progress.`,
  },
  {
    id: "tasuki-kinjo",
    name: "Tasuki Kinjo",
    affiliation:
      "RIMS (Research Institute for Mathematical Sciences), Kyoto University",
    title: String.raw`Hitchin moduli and cohomological DT theory`,
    abstract: String.raw`In this talk, I will explain some applications of ideas from Donaldson–Thomas theory to the study of the topology of Hitchin moduli spaces. These include the construction of a constant term map generalizing the coproduct, the $\chi$-independence phenomenon, and the formulation of a Langlands duality conjecture. This talk is partly based on joint work with Ben Davison, Lucien Hennecart, Olivier Schiffmann, and Eric Vasserot.`,
  },
  {
    id: "alexandre-minets",
    name: "Alexandre Minets",
    affiliation: "University of Bonn",
    title: String.raw`Equivariant multiplicities and mirror symmetry for Hilbert schemes`,
    abstract: String.raw`The global nilpotent cone of a smooth projective curve is an extremely singular variety; in particular, its irreducible components are not reduced. Multiplicities of so-called very stable components were computed by Hausel–Hitchin, using ideas from mirror symmetry. More curiously, they observed that these numbers can be naturally quantized. I will explain how to extend this quantization beyond the very stable components, and do a case study of Hilbert schemes of points on elliptic surfaces. Based on a joint work with F. Zivanovic.`,
  },
  {
    id: "andres-ibanez-nunez",
    name: "Andres Ibanez Nunez",
    affiliation: "University of Edinburgh",
    title: String.raw`The stacky cohomological non-abelian Hodge correspondence`,
    abstract: String.raw`Given a smooth projective variety $X$ and a reductive group $G$, the associated Dolbeault, de Rham and Betti stacks parametrize semistable $G$-Higgs bundles with vanishing Chern classes, flat $G$-connections, and representations of the fundamental group of $X$ in $G$, respectively. The good moduli spaces of these stacks are homeomorphic, a result known as non-abelian Hodge correspondence and proven by Simpson and others. While it is not known whether the stacks themselves are homeomorphic, I will explain that their cohomologies are canonically isomorphic, as well as their Borel–Moore homologies and intersection cohomologies. Moreover, the Dolbeault and de Rham stacks have isomorphic rational Voevodsky motives, and thus isomorphic rational Chow groups. The same is true for their good moduli spaces.
The case of Borel–Moore homology when $G$ is $\mathrm{GL}_n$ and $X$ is a curve was proven by Davison. Our proof follows a different route. The correspondence links with new versions of the $P=W$ conjecture, extensions of Hausel–Thaddeus conjecture and Safronov's Langlands duality for 3-manifolds. This is joint work with Mark Andrea de Cataldo, Andres Fernandez Herrero, Lucien Hennecart, and Tasuki Kinjo.`,
  },
  {
    id: "junliang-shen",
    name: "Junliang Shen",
    affiliation: "Yale University",
    title: String.raw`Bigraded algebras for planar singularities`,
    abstract: String.raw`The cohomology of the Hitchin moduli space is known to be a bigraded algebra, where the second (nontrivial) grading has different interpretations on the Dolbeault and Betti moduli spaces. In this talk, I will explain a local analog for planar singular points, where a similar bigraded algebra appears in the cohomology of their compactified Jacobians. This is based on joint work in progress with Davesh Maulik and Qizheng Yin.`,
  },
  {
    id: "tudor-padurariu",
    name: "Tudor Padurariu",
    affiliation: "University of Bonn",
    title: String.raw`Abelian quasi-BPS categories`,
    abstract: String.raw`I will report on joint work in progress with Sabin Cautis and Yukinobu Toda. The Grothendieck group of the Hall category of a quiver is isomorphic to a positive half of the quantum affine algebra corresponding to the quiver. We show that two structures on the Hall category are compatible: a perverse coherent $t$-structure and a filtration by window categories.
In particular, we construct $t$-structures on the so-called quasi-BPS categories, which generate Hall categories. We thus obtain a refinement of the BPS cohomology of the quiver in terms of nilpotent orbits.
I will discuss examples of quasi-BPS categories for finite-type quivers, where they may be compared with categories of representations of KLR algebras, and for the Jordan quiver. As a corollary, we prove a conjecture of Gorsky–Negut about generators of the category of coherent sheaves on the commuting stack.`,
  },
  {
    id: "hyeonjun-park",
    name: "Hyeonjun Park",
    affiliation: "Korea Institute for Advanced Study",
    title: String.raw`Shifted Lagrangian classes`,
    abstract: String.raw`In this talk, I will explain the construction of Lagrangian classes for perverse sheaves in cohomological Donaldson-Thomas theory, whose existence was conjectured by Joyce. The two key ingredients are a relative version of the DT perverse sheaves and a hyperbolic version of the dimensional reduction theorem. As a special case, we recover Borisov–Joyce/Oh–Thomas virtual classes in DT4 theory.
As applications, I will explain how to construct the following structures from the Lagrangian classes: (1) cohomological field theories for gauged linear sigma models, (2) cohomological Hall algebras for 3-Calabi–Yau categories, (3) relative Donaldson-Thomas invariants for Fano 4-folds with anti-canonical divisors, (4) algebraic Fukaya categories for hyper-kahler varieties.
This is joint work in progress with Adeel Khan, Tasuki Kinjo, and Pavel Safronov.`,
  },
  {
    id: "yukinobu-toda",
    name: "Yukinobu Toda",
    affiliation: "Kavli IPMU, University of Tokyo",
    title: String.raw`The Dolbeault geometric Langlands-type conjecture for smooth surfaces`,
    abstract: String.raw`In this talk, I will discuss work in progress on a Dolbeault geometric Langlands-type conjecture for one-dimensional coherent sheaves on smooth surfaces with nef anticanonical divisors, equipped with Bridgeland stability conditions. I will formulate the conjecture using the notion of limit categories for symmetric stacks on the automorphic side. These categories admit semiorthogonal decompositions into quasi-BPS categories, which categorify BPS invariants of Calabi–Yau threefolds. Our conjecture generalizes the Dolbeault geometric Langlands conjecture proposed in earlier joint work with Tudor Pădurariu and provides a categorical interpretation of the $\chi$-independence phenomenon for BPS invariants. As a special case, using Li's construction of a maximal Cohen–Macaulay sheaf, I will prove the conjecture for the total space of a sufficiently ample line bundle over a smooth curve, for sheaves with curve class twice that of the zero section. This establishes a twisted analogue of the Dolbeault geometric Langlands correspondence for $\mathrm{GL}_2$ over the entire Hitchin base.`,
  },
  {
    id: "junwu-tu",
    name: "Junwu Tu",
    affiliation: "ShanghaiTech University",
    title: String.raw`Geometry from Categorical Enumerative Invariants`,
    abstract: String.raw`Let $M$ be a miniversal moduli space of pairs consisting of a smooth projective Calabi-Yau threefold and a holomorphic volume form on it. Based on Witten's interpretation of background independence of string theory, Costello conjectured that the generating function of categorical enumerative invariants is a projectively flat section of certain Fock bundle over $M$.  We shall discuss how Costello's conjecture follows from the holomorphic anomaly equation. A similar consideration using holomorphic polarizations naturally leads us to the construction of a quantization of the moduli space $M$ in the sense of Kontsevich–Soibelman. Finally, we discuss a natural geometric framework to prove a universal holomorphic anomaly equation, which leads to Yamaguchi–Yau's finite generation property.`,
  },
  {
    id: "yang-zhou",
    name: "Yang Zhou",
    affiliation: "Shanghai Center for Mathematical Sciences, Fudan University",
    title: String.raw`Quasimap wall-crossing and crepant resolution conjecture`,
    abstract: String.raw`Let $X$ be a smooth proper Calabi–Yau three orbifold with projective coarse moduli space and $\widetilde{X}$ be a crepant resolution of its coarse moduli. The (genus $0$) crepant resolution conjecture predicts that the orbifold Gromov–Witten invariants of $X$ and $\widetilde{X}$ are related by certain analytic continuation and linear transformation. When $X$ is a complete intersection in toric Deligne–Mumford stack, a large part of the genus $0$ Gromov–Witten invariants can be computed using quasimap wall-crossing, even when the quantum Lefschetz fails. In this talk I will explain how this can be used to prove the crepant resolution conjecture in some cases. This is based on the joint work with Janda and Sultani, and also based on some recent computation by Jiang, Knapp, Scheidegger and myself.`,
  },
  {
    id: "woonam-lim",
    name: "Woonam Lim",
    affiliation: "Yonsei University",
    title: String.raw`The cohomological Hall algebra of curves and Quot schemes`,
    abstract: String.raw`The cohomological Hall algebra of curves acts on the (co)homology of Quot schemes via nested Quot scheme correspondence. We show that the torsion CoHA is isomorphic to a certain twisted shuffle algebra, or equivalently a symmetric algebra twisted by a Yang–Baxter operator. We use this to express the ideal of tautological relations for punctual Quot schemes in terms of the Hall algebra product, and construct some additive basis of the cohomology. We also compute the commutator between the creation and annihilation operators on the virtual homology of Quot schemes universally in terms of multiplication by tautological classes. This motivates a doubling of the torsion CoHA by adding a Cartan part. This is a joint work with Shivang Jindal.`,
  },
  {
    id: "chunyi-li",
    name: "Chunyi Li",
    affiliation: "University of Warwick",
    title: String.raw`Generalized Bogomolov–Gieseker Inequalities for the Third Chern Character`,
    abstract: String.raw`Classical Bogomolov–Gieseker inequalities bound the second Chern character of slope-stable vector bundles. Work of Bayer, Bertram, Macrì, and Toda extended this framework to conjectural inequalities for the third Chern character of tilt-stable objects on threefolds. Geometrically, such inequalities yield Castelnuovo-type bounds on the genus of curves in threefolds. They also provide an essential input to Feyzbakhsh and Thomas's reduction of Donaldson–Thomas counting theory. In this talk, I will discuss these ideas and explain our recent proof of a generalized form of the conjectural inequality, obtained with the assistance of AI. This is joint work with Zhiyu Liu, Alex Perry, Benjamin Sung, and Xiaolei Zhao.`,
  },
  {
    id: "zhengyu-zong",
    name: "Zhengyu Zong",
    affiliation: "Department of Mathematical Sciences, Tsinghua University",
    title: String.raw`Conifold gap and factorization in topological recursion`,
    abstract: String.raw`In this talk, I will talk about a conifold gap theorem for the topological recursion of mirror curves for toric Calabi–Yau 3-folds: for every local analytic family acquiring a generic one-node degeneration and every fixed genus at least two, the conifold-polarized free energy has one universal polar term, and the remainder is holomorphic in the transverse and spectator parameters. I will also talk about a factorization theorem for the partition function. The factorization theorem gives a geometric meaning to the regular part of the free energy.`,
  },
  {
    id: "francesco-sala",
    name: "Francesco Sala",
    affiliation: "Università di Pisa",
    title: String.raw`Nilpotent cohomological Hall algebras of surfaces: results and expectations`,
    abstract: String.raw`This talk will provide a gentle introduction to the theory of nilpotent cohomological Hall algebras of surfaces, recently introduced in joint work with Diaconescu, Porta, Schiffmann, and Vasserot. I will focus on the general construction, its explicit description when the surface is the minimal resolution of an ADE singularity, and a PBW-type theorem. The talk will cover part of the material presented in arXiv:2502.19445 and arXiv:2603.03386.`,
  },
  {
    id: "qizheng-yin",
    name: "Qizheng Yin",
    affiliation: null,
    title: String.raw`TBA`,
    abstract: String.raw`TBA`,
  },
];

export const speakerById = Object.fromEntries(
  speakers.map((speaker) => [speaker.id, speaker]),
);
