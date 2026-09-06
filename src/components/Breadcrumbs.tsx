import Link from "next/link";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

export default function Breadcrumbs({ items }: { items: BreadcrumbItem[] }) {
  return (
    <nav className="breadcrumbs" aria-label="Breadcrumb">
      <div className="breadcrumbs__inner">
        <ol className="breadcrumbs__list">
          <li className="breadcrumbs__item">
            <Link href="/">Home</Link>
          </li>
          {items.map((item, i) => (
            <li
              key={i}
              className="breadcrumbs__item"
              aria-current={i === items.length - 1 ? "page" : undefined}
            >
              {item.href ? (
                <Link href={item.href}>{item.label}</Link>
              ) : (
                item.label
              )}
            </li>
          ))}
        </ol>
      </div>
    </nav>
  );
}
