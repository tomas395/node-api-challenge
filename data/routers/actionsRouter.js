const router = require("express").Router();
const Actions = require("../helpers/actionModel");

router.get("/", (req, res) => {
  Actions.get()
    .then(allActions => {
      res.status(200).json({ allActions });
    })
    .catch(() => {
      res
        .status(500)
        .json({ errorMessage: "Failed to get the list of all Actions." });
    });
});

router.get("/:id", (req, res) => {
  const { id } = req.params;

  Actions.get(id)
    .then(action => {
      res.status(200).json({ action });
    })
    .catch(() => {
      res.status(500).json({ errorMessage: "Failed to GET the Action by ID." });
    });
});

router.post("/", (req, res) => {
  const { body } = req;

  Actions.insert(body)
    .then(newAction => {
      res.status(201).json({ newAction });
    })
    .catch(() => {
      res.status(500).json({ errorMessage: "Failed to Post the new Action." });
    });
});

router.put("/:id", (req, res) => {
  const { id } = req.params;
  const { body } = req;

  Actions.update(id, body)
    .then(updateAction => {
      res.status(201).json({ updateAction });
    })
    .catch(() => {
      res
        .status(500)
        .json({ errorMessage: "Failed to update the Action by ID." });
    });
});

router.delete("/:id", (req, res) => {
  const { id } = req.params;

  Actions.remove(id)
    .then(deleted => {
      res.status(200).json({ deleted });
    })
    .catch(() => {
      res
        .status(500)
        .json({ errorMessage: "Failed to delete the specified Action." });
    });
});

module.exports = router;
