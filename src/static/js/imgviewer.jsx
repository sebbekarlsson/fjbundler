const svgStyle = `
  pointer-events: none;
  position: relative;
`;

export function SVG(holder, data, camera) {
  this.data = data;
  this.holder = holder;
  this.holder.svg = this;
  this.loaded = false;
  this.camera = camera;
  this.rect = function () {
    return this.ref.getBoundingClientRect();
  }.bind(this);

  this.x = 0;
  this.y = 0;
  this.w = 0;
  this.h = 0;

  this.onLoad = function () {
    this.loaded = true;
  }.bind(this);

  this.setSize = function (w, h) {
    this.w = w;
    this.h = h;
  }.bind(this);

  this.render = function () {
    const zoom = this.camera.zoom;

    var aspect = this.w / this.h;
    let w = this.camera.zoom * this.w;
    let h = w / aspect; 
    let x = this.w / 2 + this.camera.x * zoom + this.x;
    let y = this.h / 2 + this.camera.y * zoom + this.y;

    this.ref.style.width = w + "px";
    this.ref.style.height = h + "px";
    this.ref.style.left = x + "px";
    this.ref.style.top = y + "px";
  }.bind(this);

  return (
    <object
      onLoad={this.onLoad}
      data={data}
      type="image/svg+xml"
      style={svgStyle}
    />
  );
}

const imageViewerStyle = `
  background-color: lightgray;
  display: block;
  min-width: 100%;
  min-height: 100%;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  border-style: solid;
  border-width: 1px;
  border-color: lightgray;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 90 !important;
  pointer-events: all;
  cursor: grab;
`;

function Camera(x, y, zoom, callback) {
  this.x = x;
  this.y = y;
  this.zoom = zoom;
  this.callback = callback;

  this.translate = function (x, y, zoom) {
    this.x = x;
    this.y = y;
    if (typeof zoom != "undefined" && zoom != null) this.zoom = zoom;
  }.bind(this);
}

export function ImageViewer(data) {
  this.data = data;
  this.svg = null;
  this.prevX = 0;
  this.prevY = 0;
  this.camera = new Camera(0, 0, 1, function (x, y) {}.bind(this));

  this.rect = function () {
    return this.ref.getBoundingClientRect();
  }.bind(this);

  this.onDragStart = function (e) {
    const coords = this.getCoordsInRect(e.clientX, e.clientY);
    this.prevX = coords.x;
    this.prevY = coords.y;
    e.dataTransfer.setDragImage(new Image(), 0, 0);
  };

  this.getCoordsInRect = function (x, y) {
    const rect = this.rect();
    return { x: x - rect.left, y: y - rect.top };
  }.bind(this);

  this.onDragOver = function (e) {
    const coords = this.getCoordsInRect(e.clientX, e.clientY);

    const deltaX = -(this.prevX - coords.x) / this.camera.zoom;
    const deltaY = -(this.prevY - coords.y) / this.camera.zoom;

    this.camera.translate(
      this.camera.x + deltaX,
      this.camera.y + deltaY,
      this.camera.zoom
    );

    this.prevX = coords.x;
    this.prevY = coords.y;

    this.svg.render();
  };

  this.onDragEnd = function (e) {
    const coords = this.getCoordsInRect(e.clientX, e.clientY);
  };

  this.onMouseWheel = function (e) {
    e.preventDefault();

    const delta = Math.max(-1, Math.min(1, e.wheelDelta || -e.detail));
    const scaleAmount = 1.0 + delta / 10.0;
    this.camera.zoom += (delta / 5.0) * this.camera.zoom;

    let r = this.svg.rect();
    var aspect = r.width / r.height;
    r = this.svg.rect();

    const svgRect = this.svg.rect();
    const w = this.svg.rect().width * this.camera.zoom;
    const h = w / aspect;
    this.camera.translate(this.camera.x, this.camera.y, this.camera.zoom);
    this.svg.render();
  }.bind(this);

  this.onKeyDown = function (e) {
    if (
      (e.key === "Escape" || e.key === "Esc") &&
      this.ref &&
      this.ref.parentNode
    ) {
      this.ref.parentNode.removeChild(this.ref);
    }
  }.bind(this);
  window.addEventListener("keydown", this.onKeyDown);

  const init = function () {
    let interval = setInterval(
      function () {
        if (this.svg && this.svg.ref && this.svg.loaded) {
          let rect = this.rect();
          this.svg.setSize(rect.width * this.camera.zoom, rect.height * this.camera.zoom);
          this.camera.translate(-(this.svg.w / 2), -(this.svg.h / 2));
          this.svg.render();

          clearInterval(interval);
        }
      }.bind(this),
      60
    );
  }.bind(this);
  init();

  return (
    <div
      draggable={true}
      onDragOver={this.onDragOver.bind(this)}
      onDragStart={this.onDragStart.bind(this)}
      onDragEnd={this.onDragEnd.bind(this)}
      onMouseWheel={this.onMouseWheel.bind(this)}
      style={imageViewerStyle}
    >
      <SVG camera={this.camera} holder={this} data={data}/>
    </div>
  );
}
