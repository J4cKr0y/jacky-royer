export const ProjectFeatures = ({ features }) => (
  <div className="space-y-2">
    <h4 className="font-semibold text-sm">Fonctionnalités clés :</h4>
    <ul className="text-xs text-muted-foreground space-y-1">
      {features.map((feature, index) => (
        <li key={index} className="flex items-center gap-2">
          <div className="w-1 h-1 bg-primary rounded-full" />
          {feature}
        </li>
      ))}
    </ul>
  </div>
);
