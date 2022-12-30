import { Typography, Card, CardActions, CardContent, CardMedia, Button } from '@mui/material';

const listPillars = [
  { altImage: "service informatique", urlImage: "/static/images/cards/service_informatique.jpg", titre: "Service informatique", texte: "Nous vous aidons dans le choix des technologies au quotidien afin de vous permettre de vous concentrer sur votre coeur de métier.", services: ["Leasing matériel", "Support", "Formations"] },
  { altImage: "solutions collaboratives", urlImage: "/static/images/cards/solutions_collaboratives.jpg", titre: "Solutions collaboratives", texte: "Nous mettons en place avec vous les outils vous permettant d'améliorer votre productivité et celle de vos collaborateurs.", services: ["Mail professionnel", "Outils de bureautique", "Gestion des factures"] },
  { altImage: "Visibilité sur les réseaux", urlImage: "/static/images/cards/visibilite_reseau.jpg", titre: "Visibilité sur les réseaux", texte: "Nous créons et améliorons votre visibilité sur les différents réseaux et plateformes afin d'accroître votre clientèle.", services: ["Site Internet", "Réseaux sociaux", "Campagnes de pubs en ligne"] }
];

const Pillars = () => {
  return (
    <>
      {listPillars.map((pillar) => (
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            component="img"
            alt={pillar.altImage}
            image={pillar.urlImage}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">{pillar.titre}</Typography>
            <Typography variant="body2" color="text.secondary">{pillar.texte}</Typography>
          </CardContent>
          <CardActions>
            {pillar.services.map((service) => (
              <Button size="small">{service}</Button>
            ))}
          </CardActions>
        </Card >
      ))}
    </>
  );
}
export default Pillars;