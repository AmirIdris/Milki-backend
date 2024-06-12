const express = require("express");
const router = express.Router();
const {
  create,
  findAll,
  findOne
} = require("../../controllers/group/group.controller");
const {
createGroupValidation
} = require("../../validation/group/group.validation");
const { checkPermission } = require("../../../middlewares/accessControl");
router.post("/create",checkPermission('can_create_group'),createGroupValidation, create);
router.get("/get",checkPermission('can_view_group'), findAll);
router.get("/get/:group_id",checkPermission('can_view_sector'), findOne);
// router.delete("/delete/:woreda_id",checkPermission('can_delete_woreda_admin'), deleteOne);

module.exports = router;
