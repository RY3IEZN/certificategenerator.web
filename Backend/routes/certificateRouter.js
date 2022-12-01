const express = require('express');
const router = express.Router();
const fileExtLimiter = require('../middleware/fileExtLimiter')

const { getAllCertificates,
    addCertificate,
    getCertificate,
    getNoOfCertificatesIssued,
    deleteCertificate, getCertificateStatus, updateCertificateDetails, updateCertificateStatus } = require('../controllers/userCertificateController');

router.get('/issuedCertificates', getNoOfCertificatesIssued);
router.get('/', getAllCertificates);
router.get('/status', getCertificateStatus);
router.post('/', fileExtLimiter, addCertificate);
router.get('/:id', getCertificate);
router.put('/:id', updateCertificateDetails);
router.delete('/:id', deleteCertificate);
router.patch('/status/:id', updateCertificateStatus);

module.exports = router;