import Dashboard from "../components/Dashboard1";

// export const WeaponManagement = "https://serverweapon.uppolice.co.in";
export const WeaponManagement = "http://localhost:8000";

const Api = {
  ShowWeapon: `${WeaponManagement}/api/Admin/show-weapon`,
  ShowOutFectory: `${WeaponManagement}/api/Admin/show-outfectory`,
  ShowAmmunition: `${WeaponManagement}/api/Admin/show-ammunition`,
  ShowMemorabilia: `${WeaponManagement}/api/Admin/show-memorabilia`,
  ShowDistrict: `${WeaponManagement}/api/Admin/show-district`,
  UpdateWeapon: `${WeaponManagement}/api/Admin/update-weapon`,
  UpdateOutFectory: `${WeaponManagement}/api/Admin/update-outfectory`,
  UpdateDistrict: `${WeaponManagement}/api/Admin/update-district`,
  UpdateMemorabilia: `${WeaponManagement}/api/Admin/update-memorabilia`,
  UpdateAmmunition: `${WeaponManagement}/api/Admin/update-ammunition`,
  AddWeapon: `${WeaponManagement}/api/Admin/Add-Weapon`,
  AddOutFectory: `${WeaponManagement}/api/Admin/add-outfectory`,
  AddAmmunition: `${WeaponManagement}/api/Admin/add-ammunition`,
  AddDistrict: `${WeaponManagement}/api/Admin/add-district`,
  AddMemorabilia: `${WeaponManagement}/api/Admin/add-memorabilia`,
  DeleteWeapon: `${WeaponManagement}/api/Admin/delete-weapon`,
  DeleteOutFectory: `${WeaponManagement}/api/Admin/delete-outfectory`,
  DeleteAmmunition: `${WeaponManagement}/api/Admin/delete-Ammunition`,
  DeleteMemorabilia: `${WeaponManagement}/api/Admin/delete-memorabilia`,
  DeleteDistrict: `${WeaponManagement}/api/Admin/delete-district`,
  LoginAPI: `${WeaponManagement}/api/user/login`,
  ShowCr: `${WeaponManagement}/api/Admin/show-cr`,
  AddCr: `${WeaponManagement}/api/Admin/add-cr`,
  UpadateCr: `${WeaponManagement}/api/Admin/update-cr`,
  DeleteCr: `${WeaponManagement}/api/Admin/delete-cr`,
  DistrictToDistrictSeries: `${WeaponManagement}/api/District/D-D-series`,
  DistrictToDistictAssign: `${WeaponManagement}/api/District/D-D-Assign`,
  DistrictToDistictReturn: `${WeaponManagement}/api/District/D-D-Return`,
  GetWeaponSeriesNumbers: `${WeaponManagement}/api/CR/getWeaponSeriesNumbers`,
  DistrictAssignWeapons: `${WeaponManagement}/api/CR/district-Assign-Weapons`,
  WeaponsReturn: `${WeaponManagement}/api/CR/weapons-return`,
  GetWeaponSeries: `${WeaponManagement}/api/cr/getWeaponSeries`,
  Dashboard: `${WeaponManagement}/api/CR/Dashboard`,
  ShowCategory: `${WeaponManagement}/api/Admin/show-category`,
  UpdateCategory: `${WeaponManagement}/api/Admin/update-category`,
  DeleteCategory: `${WeaponManagement}/api/Admin/delete-category`,
  AddCategory: `${WeaponManagement}/api/Admin/add-category`,
  AdminDashboard: `${WeaponManagement}/api/Admin/admin-dashboard`,
  ShowWeaponAssign: `${WeaponManagement}/api/CR/show-weapon-assign`,
  AdminDashboardCount: `${WeaponManagement}/api/Admin/admin-dashboard-count`,


};

export default Api;
