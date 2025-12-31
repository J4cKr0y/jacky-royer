export const ProjectStats = ({ stats }) => (
  <div className="grid grid-cols-3 gap-4 py-4 bg-secondary/30 rounded-lg px-4">
    <div className="text-center">
      <div className="font-bold text-portfolio-accent">{stats.js}</div>
      <div className="text-xs text-muted-foreground">JavaScript</div>
    </div>
    <div className="text-center">
      <div className="font-bold text-portfolio-cyan">{stats.css}</div>
      <div className="text-xs text-muted-foreground">CSS</div>
    </div>
    <div className="text-center">
      <div className="font-bold text-portfolio-purple">{stats.html}</div>
      <div className="text-xs text-muted-foreground">HTML</div>
    </div>
  </div>
);
