module.exports = (req,res,next) => {


if (req.session && req.session.user && req.session.user.username === 'admin2') {
    next();

} else {
    res.status(401).json({ message: "Access Denied"});
}
}

