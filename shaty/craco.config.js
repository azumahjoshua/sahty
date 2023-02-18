module.exports = {
	theme: {
		extend: {
			animation: {
				typing: "5s steps(30, end)",
				blink: "0.75s step- end infinite",
			},
			keyframes: {
				typing: {
					from: {
						width: "0",
					},
					to: {
						width: "100",
					},
				},
			},
		},
	},
	eslint: {
		enable: false,
	},
};
