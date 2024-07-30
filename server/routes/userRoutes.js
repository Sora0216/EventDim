const router = require('express').Router();
const { User } = require('../utils/auth');
const { singToken } = require('../utils/auth');

router.post('/singup', async (req,res) => {
    try {
        const user = await User.create(req.body);
        const token = singToken(user);
        res.json({ token, user });
    } catch (err) {
        res.status(400).json(err);
    }
});

router.post('/login', async (req, res) => {
    const user = await User.findOne({ email: req.body.email });
    if (!user) {
        return res.status(400).json({ message: 'Incorrect email or password' });
    }
    const correctPw = await user.isCorrectPassword(req.body.password);
    if (!correctPw) {
        return res.status(400).json({ message: 'Incorrect email or password' });
    }
    const token = singToken(user);
    res.json({ token, user });
});

module.exports = router;