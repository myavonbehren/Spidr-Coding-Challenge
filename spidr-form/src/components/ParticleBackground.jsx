class ParticleBackground {
    constructor(canvas) {
        if (!canvas) {
            throw new Error('Canvas element is required');
        }
        
        this.canvas = canvas;
        this.ctx = this.canvas.getContext('2d');
        
        if (!this.ctx) {
            throw new Error('Could not get 2D context from canvas');
        }
        
        this.particles = [];
        this.animationId = null;
        
        this.init();
    }
    
    init() {
        this.resizeCanvas();
        this.setupEventListeners();
        this.animate();
    }
    
    resizeCanvas() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
    }
    
    setupEventListeners() {
        this.boundResize = () => this.resizeCanvas();
        this.boundMouseMove = (e) => this.handleMouseMove(e);
        
        window.addEventListener('resize', this.boundResize);
        window.addEventListener('mousemove', this.boundMouseMove);
    }
    
    handleMouseMove(e) {
        if (Math.random() < 0.2) {
            this.particles.push({
                x: e.clientX + (Math.random() - 0.5) * 300,
                y: e.clientY + (Math.random() - 0.5) * 300,
                vx: (Math.random() - 0.5) * 0.3,
                vy: (Math.random() - 0.5) * 0.3,
                life: 0,
                maxLife: 180 + Math.random() * 150
            });
        }
    }
    
    drawNode(x, y, size, opacity) {
        this.ctx.save();
        this.ctx.globalAlpha = opacity;
        this.ctx.fillStyle = '#8ea0ad';
        this.ctx.beginPath();
        this.ctx.arc(x, y, size, 0, Math.PI * 2);
        this.ctx.fill();
        this.ctx.restore();
    }
    
    drawConnection(particle1, particle2, opacity) {
        const dx = particle1.x - particle2.x;
        const dy = particle1.y - particle2.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < 400 && distance > 80) {
            const lineOpacity = opacity * (1 - distance / 400) * 0.25;
            this.ctx.strokeStyle = `rgba(142, 160, 173, ${lineOpacity})`;
            this.ctx.lineWidth = 0.6;
            this.ctx.beginPath();
            this.ctx.moveTo(particle1.x, particle1.y);
            this.ctx.lineTo(particle2.x, particle2.y);
            this.ctx.stroke();
        }
    }
    
    updateParticles() {
        this.particles = this.particles.filter(particle => {
            particle.life++;
            particle.x += particle.vx;
            particle.y += particle.vy;
            
            const opacity = Math.max(0, 1 - particle.life / particle.maxLife);
            
            if (opacity > 0) {
                this.particles.forEach(otherParticle => {
                    if (otherParticle !== particle) {
                        this.drawConnection(particle, otherParticle, opacity);
                    }
                });
                
                this.drawNode(particle.x, particle.y, 2, opacity * 0.8);
            }
            
            return particle.life < particle.maxLife;
        });
    }
    
    spawnRandomParticle() {
        if (Math.random() < 0.003 && this.particles.length < 20) {
            this.particles.push({
                x: Math.random() * this.canvas.width,
                y: Math.random() * this.canvas.height,
                vx: (Math.random() - 0.5) * 0.15,
                vy: (Math.random() - 0.5) * 0.15,
                life: 0,
                maxLife: 300 + Math.random() * 400
            });
        }
    }
    
    animate() {
        this.ctx.fillStyle = '#282829';
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
        
        this.updateParticles();
        this.spawnRandomParticle();
        
        this.animationId = requestAnimationFrame(() => this.animate());
    }
    
    destroy() {
        if (this.animationId) {
            cancelAnimationFrame(this.animationId);
        }
        window.removeEventListener('resize', this.boundResize);
        window.removeEventListener('mousemove', this.boundMouseMove);
    }
}

export default ParticleBackground;
