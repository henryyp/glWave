let React = require('react');
let THREE = require('three');

class Visualiser extends React.Component {


	constructor(props) {
		super(props);
		this.count = 0;
		this.animate = this.animate.bind(this);
	}

	componentWillMount() {

		this.camera = new THREE.PerspectiveCamera(45, window.innerWidth/window.innerHeight, 0.1, 10000);
		this.camera.position.z = 300;

		this.scene = new THREE.Scene();

		let geom = new THREE.SphereGeometry(50, 16, 16);
		let material = new THREE.MeshBasicMaterial( { color: 0xff00ff, wireframe: true } );
		this.mesh = new THREE.Mesh( geom, material );

		this.scene.add(this.mesh);
	}

	componentDidMount() {
		this.renderer = new THREE.WebGLRenderer({canvas: this.refs.trafficCanvas.getDOMNode() });
		this.renderer.setSize(window.innerWidth, window.innerHeight);
		this.animate();
	}

	animate() {
		requestAnimationFrame( this.animate );

    this.mesh.rotation.x += 0.01;
    this.mesh.rotation.y += 0.02;

    this.renderer.render( this.scene, this.camera );
	}

	render() {
		return(
			<div className="visualiserView">
				<h2>Visualiser</h2>
				<canvas ref="trafficCanvas" id="traffic" />
			</div>
		);
	}
}

module.exports = Visualiser;

