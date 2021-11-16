const { Router } = require('express');
const router = Router();

router.get('/test', (req, res) => {
    const data = {
        "name": "Lee",
        "apellido": "Tipismana"
    };
    res.json(data);
});

module.exports = router;