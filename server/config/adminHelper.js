module.exports.admin = function (req, res, next) {

    if (!req.role) return res.status(401).json({
        'message': "Access denied. No token provided"
    });

    if (req.role !== "A")
        return res.status(401).json({
            'message': "Access denied. you are not allowed to access this resource"
        });

    next();
}
