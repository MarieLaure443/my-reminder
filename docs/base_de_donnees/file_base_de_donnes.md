# Base de données

Voici des liens pour les bases de données, ici principalement en première partie SQL
Une base de données est un ensemble organisé et structuré de données stockées électroniquement sur un ordinateur ou un serveur. Elle est utilisée pour stocker, organiser, gérer et récupérer des informations de manière efficace et sécurisée. Les bases de données sont utilisées dans de nombreux domaines, tels que les entreprises, les organisations gouvernementales, les établissements d'enseignement et les applications informatiques.

Les données stockées dans une base de données sont généralement structurées en tables, qui sont composées de colonnes et de lignes. Les colonnes représentent les différents types d'informations que l'on souhaite stocker (par exemple, nom, prénom, adresse, etc.), tandis que les lignes représentent les enregistrements individuels correspondant à chaque personne ou entité. Les bases de données permettent également de lier des informations provenant de différentes tables, ce qui permet de créer des relations complexes entre les données.

Les avantages des bases de données sont nombreux : elles permettent de stocker une grande quantité d'informations de manière organisée, de les gérer de manière efficace et de les récupérer rapidement. De plus, les bases de données offrent un haut niveau de sécurité, avec la possibilité de restreindre l'accès à certaines informations à des utilisateurs spécifiques.

## Base de données relationnel

Une base de données relationnelle est un type de système de gestion de base de données (SGBD) qui organise les données en tables constituées de lignes et de colonnes. Ces tables sont reliées entre elles par des relations définies par des clés primaires et des clés étrangères.

Dans une base de données relationnelle, les données sont structurées de manière logique et sont stockées de manière persistante. Chaque table représente une entité spécifique, par exemple, une table "Clients" pourrait contenir des informations telles que les noms, les adresses et les numéros de téléphone des clients.

Les relations entre les tables sont établies en utilisant des clés primaires et des clés étrangères. Une clé primaire est une colonne unique dans une table qui identifie de manière unique chaque enregistrement. Une clé étrangère est une colonne dans une table qui fait référence à la clé primaire d'une autre table. Cela permet de relier les enregistrements entre différentes tables.

Les bases de données relationnelles sont basées sur le modèle relationnel, développé par Edgar Codd dans les années 1970. Ce modèle repose sur plusieurs principes clés, notamment :

L'intégrité référentielle : garantit que les relations entre les tables sont cohérentes et maintient l'intégrité des données. Si une table fait référence à une autre table via une clé étrangère, il doit y avoir une correspondance valide dans la table référencée.

Les opérations de l'algèbre relationnelle : permettent d'effectuer des opérations sur les tables telles que la sélection (filtrage des données), la projection (sélection de certaines colonnes), l'union, l'intersection, la différence, etc.

La normalisation : un processus qui permet de concevoir une base de données relationnelle de manière efficace en évitant les redondances et en réduisant les anomalies lors de la manipulation des données.

Les bases de données relationnelles offrent plusieurs avantages, tels que la flexibilité de requête avec le langage SQL (Structured Query Language), la cohérence des données, la capacité à gérer des relations complexes entre les données et la sécurité des données grâce à la gestion des accès et des autorisations.

Cependant, les bases de données relationnelles peuvent présenter certaines limites en termes de performances lorsqu'il s'agit de gérer de grandes quantités de données ou de requêtes complexes. C'est pourquoi, dans certains cas, les bases de données NoSQL ont été développées pour répondre à des besoins spécifiques de performances, de scalabilité et de flexibilité.

### SQL

Une base de données SQL (Structured Query Language) est une base de données qui utilise le langage SQL pour stocker, organiser et gérer des données de manière structurée et relationnelle. SQL est un langage de programmation standardisé utilisé pour accéder aux bases de données relationnelles, qui sont des systèmes de stockage de données organisés en tables.

Les bases de données SQL sont utilisées dans de nombreux domaines, tels que les entreprises, les organisations gouvernementales, les établissements d'enseignement et les applications informatiques. Elles permettent de stocker une grande quantité de données de manière organisée et structurée, et de les gérer efficacement à l'aide de requêtes SQL.

Les avantages des bases de données SQL sont nombreux : elles permettent de stocker une grande quantité d'informations de manière organisée, de les gérer de manière efficace et de les récupérer rapidement. De plus, les bases de données SQL offrent un haut niveau de sécurité, avec la possibilité de restreindre l'accès à certaines informations à des utilisateurs spécifiques. Enfin, les bases de données SQL sont largement utilisées dans l'industrie et sont compatibles avec de nombreux outils et technologies.

\*\*SELECT \* FROM mytable WHERE firstname = 'Thomas';

- https://sqlzoo.net/wiki/SQL_Tutorial
- https://laurent-audibert.developpez.com/Cours-BD/?page=langage-sql

## Base de données NoSQL

Une base de données NoSQL (Not only SQL) est un type de système de gestion de base de données qui diffère des bases de données relationnelles traditionnelles. Contrairement aux bases de données SQL, les bases de données NoSQL ne reposent pas sur le modèle de données relationnel et n'utilisent pas le langage SQL pour interroger les données.

Les bases de données NoSQL sont conçues pour gérer des quantités massives de données non structurées ou semi-structurées, souvent appelées Big Data. Elles sont utilisées dans des domaines tels que le Web, le cloud computing, l'Internet des objets (IoT) et d'autres applications qui nécessitent une évolutivité horizontale et une haute disponibilité.

Il existe différents types de bases de données NoSQL, chacun avec ses propres modèles de données et fonctionnalités spécifiques :

Bases de données de type clé-valeur : elles stockent les données sous forme de paires clé-valeur, où chaque clé est unique et permet d'accéder rapidement à la valeur correspondante. Elles sont optimisées pour la récupération rapide des données, mais ont des fonctionnalités de requête limitées.

Bases de données de documents : elles stockent les données dans des documents semi-structurés tels que JSON, XML ou BSON (format binaire JSON). Les documents peuvent être organisés en collections, et les bases de données de documents offrent des fonctionnalités de requête plus riches que les bases de données de type clé-valeur.

Bases de données de colonnes : elles stockent les données de manière orientée colonne plutôt que ligne par ligne, ce qui permet une compression efficace des données et une récupération sélective des colonnes. Elles sont adaptées aux cas d'utilisation nécessitant une analyse et une agrégation rapides des données.

Bases de données graphiques : elles sont utilisées pour stocker et gérer des données interconnectées sous forme de graphes. Les bases de données graphiques sont efficaces pour résoudre des problèmes impliquant des relations complexes et des requêtes de type graphique.

Les bases de données NoSQL offrent une évolutivité horizontale, ce qui signifie qu'elles peuvent être facilement distribuées sur plusieurs serveurs, permettant ainsi de gérer de grands volumes de données et de gérer des charges de travail intensives. Cependant, elles peuvent présenter des compromis en termes de cohérence des données et de fonctionnalités transactionnelles, par rapport aux bases de données relationnelles traditionnelles.

### Mongo DB

MongoDB est une base de données NoSQL (Not Only SQL) open-source qui stocke les données sous forme de documents JSON (JavaScript Object Notation). Elle est conçue pour être flexible, évolutive et hautement disponible, ce qui la rend idéale pour les applications web modernes qui nécessitent une grande scalabilité.

MongoDB utilise un modèle de données de documents qui permet de stocker des données non structurées et semi-structurées. Les documents MongoDB peuvent contenir des champs de données multiples, ce qui les rend plus souples que les modèles de données traditionnels. De plus, MongoDB utilise un langage de requête puissant qui permet aux développeurs de rechercher des données de manière flexible.

Les avantages de MongoDB sont nombreux : elle offre une grande performance et évolutivité, avec la possibilité de gérer des volumes de données importants. Elle est également facile à utiliser et à configurer, avec une courbe d'apprentissage rapide pour les développeurs. De plus, MongoDB peut être déployée sur site ou dans le cloud, ce qui la rend très flexible en termes d'architecture. En somme, MongoDB est une base de données NoSQL populaire qui permet aux développeurs de stocker et de gérer des données de manière flexible et évolutive.

\*\*db.mycollection.find({"firstname": "Thomas"})

- https://www.mongodb.com/fr-fr/what-is-mongodb
- https://openclassrooms.com/fr/courses/4462426-maitrisez-les-bases-de-donnees-nosql/4474601-decouvrez-le-fonctionnement-de-mongodb

## Mémo

Mémo pour le SQL

- https://sql.sh/ressources/document/mysql-aide-memoire-sql.pdf
- https://www.sqltutorial.org/sql-cheat-sheet/
- https://www.sqlchat.ai/?ref=producthunt
- https://www.kdnuggets.com/2023/04/chatgpt-learn-sql.html?utm_source=rss&utm_medium=rss&utm_campaign=using-chatgpt-to-learn-sql
