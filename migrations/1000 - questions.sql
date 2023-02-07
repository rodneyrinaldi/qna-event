-- up
CREATE TABLE questions
(
  name TEXT
);

INSERT INTO questions
  (name)
VALUES
  ("teste");

INSERT INTO questions
  (name)
VALUES
  ("teste2");

INSERT INTO questions
  (name)
VALUES
  ("teste3");

-- Down
DROP TABLE questions;

