function initSimulation() {
	const {
		Engine,
		Render,
		Events,
		MouseConstraint,
		Mouse,
		World,
		Bodies,
	} = Matter;

	const containerElement = document.querySelector(".tags-container2");

	if (!containerElement) {
		console.error("tags-container2 not found");
		return;
	}

	if (containerElement.dataset.initialized === "true") return;
	containerElement.dataset.initialized = "true";

	containerElement.style.position = "relative";

	const containerWidth = containerElement.clientWidth || 800;
	const containerHeight = containerElement.clientHeight || 600;

	const engine = Engine.create();
	engine.gravity.y = 0.8;

	const render = Render.create({
		element: containerElement,
		engine,
		options: {
			width: containerWidth,
			height: containerHeight,
			background: "transparent",
			wireframes: false,
		},
	});

	const ground = Bodies.rectangle(
		containerWidth / 2,
		containerHeight + 40,
		containerWidth + 300,
		80,
		{ isStatic: true },
	);

	const wallLeft = Bodies.rectangle(
		-40,
		containerHeight / 2,
		80,
		containerHeight,
		{ isStatic: true },
	);

	const wallRight = Bodies.rectangle(
		containerWidth + 40,
		containerHeight / 2,
		80,
		containerHeight,
		{ isStatic: true },
	);

	const roof = Bodies.rectangle(
		containerWidth / 2,
		-40,
		containerWidth + 300,
		80,
		{ isStatic: true },
	);

	const skills = [
		"REACT",
		"NODE.JS",
		"EXPRESS.JS",
		"MONGODB",
		"JAVASCRIPT",
		"TYPESCRIPT",
		"HTML5",
		"CSS3",
		"REDUX",
		"REST API",
		"POSTGRESQL",
		"MYSQL",
		"AWS",
		"DOCKER",
		"GIT",
		"STRIPE",
	];

	const colors = [
		"#61DAFB",
		"#68A063",
		"#ffffff",
		"#47A248",
		"#F7DF1E",
		"#3178C6",
		"#E34F26",
		"#1572B6",
		"#764ABC",
		"#F97316",
		"#336791",
		"#4479A1",
		"#FF9900",
		"#2496ED",
		"#F05032",
		"#635BFF",
	];

	const skillBodies = [];

	skills.forEach((skill, index) => {
		const element = document.createElement("div");

		element.className = "skill-tag";
		element.textContent = skill;
		element.style.backgroundColor = colors[index];
		element.style.color = "#000";

		containerElement.appendChild(element);

		const tagWidth = Math.max(100, skill.length * 10 + 48);

		const body = Bodies.rectangle(
			100 + Math.random() * (containerWidth - 200),
			50 + Math.random() * 250,
			tagWidth,
			48,
			{
				chamfer: {
					radius: 24,
				},
				restitution: 0.5,
				friction: 0.2,
				frictionAir: 0.02,
				render: {
					visible: false,
				},
			},
		);

		body.htmlElement = element;
		skillBodies.push(body);
	});

	World.add(world, [
		ground,
		wallLeft,
		wallRight,
		roof,
		...skillBodies,
	]);

	function updateSkillElements() {
		skillBodies.forEach((body) => {
			const element = body.htmlElement;

			element.style.transform = `
				translate(
					${body.position.x - body.bounds.max.x / 2 + body.bounds.min.x / 2}px,
					${body.position.y - 24}px
				)
				rotate(${body.angle}rad)
			`;
		});
	}

	// Important: show elements immediately
	updateSkillElements();

	Events.on(engine, "afterUpdate", updateSkillElements);

	const mouse = Mouse.create(render.canvas);

	const mouseConstraint = MouseConstraint.create(engine, {
		mouse,
		constraint: {
			stiffness: 0.2,
			render: {
				visible: false,
			},
		},
	});

	World.add(world, mouseConstraint);

	render.mouse = mouse;

	mouse.element.removeEventListener(
		"mousewheel",
		mouse.mousewheel,
	);

	mouse.element.removeEventListener(
		"DOMMouseScroll",
		mouse.mousewheel,
	);

	Engine.run(engine);
	Render.run(render);
}

function setupMatterObserver() {
	const containerElement = document.querySelector(".tags-container2");

	if (!containerElement) {
		window.addEventListener("load", setupMatterObserver, {
			once: true,
		});
		return;
	}

	const observer = new IntersectionObserver(
		(entries, observerInstance) => {
			if (entries.some((entry) => entry.isIntersecting)) {
				initSimulation();
				observerInstance.disconnect();
			}
		},
		{
			threshold: 0.1,
		},
	);

	observer.observe(containerElement);
}

setupMatterObserver();