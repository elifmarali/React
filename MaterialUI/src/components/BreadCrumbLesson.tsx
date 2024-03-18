import { Breadcrumbs, Link } from "@mui/material";
function BreadCrumbLesson() {
  return (
    <Breadcrumbs separator="-" maxItems={4}>
      <Link href="#" underline="hover">
        Anasayfa
      </Link>
      <Link underline="none">Blog</Link>
      <Link>Elif Marali</Link>
      <Link>Elif Marali</Link>
      <Link>Elif Marali</Link>
      <Link>Elif Marali</Link>
      <Link>Elif Marali</Link>
      <Link>Elif Marali</Link>
      <Link>Elif Marali</Link>
      <Link>Elif Marali</Link>
      <Link>Elif Marali</Link>
    </Breadcrumbs>
  );
}

export default BreadCrumbLesson;
