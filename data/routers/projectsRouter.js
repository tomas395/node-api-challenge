const router = require("express").Router();
const Projects = require("../helpers/projectModel");
const Actions = require("../helpers/actionModel");

router.get("/", (req, res) => {
  Projects.get()
    .then(projectList => {
      res.status(200).json({ projectList });
    })
    .catch(err => {
      res.status(500).json({
        errorMessage: "Failed to retrieve the list all of the Projects."
      });
    });
});

router.get("/:id", (req, res) => {
  const { id } = req.params;

  Projects.get(id)
    .then(project => {
      res.status(200).json({ project });
    })
    .catch(err => {
      res.status(500).json({
        errorMessage: "Failed to GET the specified Project by ID."
      });
    });
});

router.get("/:id/actions", (req, res) => {
  const { id } = req.params;

  Projects.getProjectActions(id)
    .then(actions => {
      res.status(200).json({ actions });
    })
    .catch(err => {
      res
        .status(500)
        .json({ errorMessage: "Failed to GET the project Action by ID." });
    });
});

router.post("/", (req, res) => {
  const { body } = req;

  Projects.insert(body)
    .then(project => {
      res.status(201).json({ project });
    })
    .catch(err => {
      res.status(500).json({ errorMessage: "Failed to create the Project." });
    });
});

router.post("/:id/actions", (req, res) => {
  const { body } = req;

  Actions.insert(body)
    .then(action => {
      res.status(201).json({ action });
    })
    .catch(() => {
      res
        .status(500)
        .json({ errorMessage: "Failed to create the specified Action by ID." });
    });
});

router.put("/:id", (req, res) => {
  const { id } = req.params;
  const { body } = req;

  Projects.update(id, body)
    .then(updateProject => {
      res.status(201).json({ updateProject });
    })
    .catch(err => {
      res.status(500).json({
        errorMessage: "Failed to update the specified Project by ID."
      });
    });
});

router.put("/:id/actions", (req, res) => {
  const { id } = req.params;
  const { body } = req;

  Actions.update(id, body)
    .then(updateAction => {
      res.status(201).json({ updateAction });
    })
    .catch(() => {
      res
        .status(500)
        .json({ errorMessage: "Failed to update the specified Action by ID." });
    });
});

router.delete("/:id", (req, res) => {
  const { id } = req.params;
  Projects.remove(id)
    .then(deleted => {
      res.status(200).json({ deleted });
    })
    .catch(err => {
      res.status(500).json({ errorMessage: "Failed to delete the Project." });
    });
});

router.delete("/:id/actions", (req, res) => {
  console.log("Deleted Project Action!", req);
});

module.exports = router;
