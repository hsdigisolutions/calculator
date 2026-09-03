import Link from "next/link";
import { Icon } from "@/components/Icon";
import { cn } from "@/lib/utils";
import { type WPPostListItem, stripHtml, formatPostDate } from "@/lib/wordpress";

/**
 * Blog post card — mirrors the calculator card style (rounded-2xl surface,
 * line border, spring hover lift) so the blog feels part of the same system.
 */
export function PostCard({ post }: { post: WPPostListItem }) {
  const img = post.featuredImage?.node;
  const excerpt = stripHtml(post.excerpt);
  const date = formatPostDate(post.date);

  return (
    <Link
      href={`/blog/${post.slug}`}
      className={cn(
        "group relative flex flex-col overflow-hidden rounded-2xl bg-surface border border-line",
        "shadow-sm hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 ease-spring"
      )}
    >
      {img && (
        <div className="aspect-[16/9] overflow-hidden bg-surface-2">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={img.sourceUrl}
            alt={img.altText ?? stripHtml(post.title)}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          />
        </div>
      )}
      <div className="flex flex-1 flex-col gap-3 p-5">
        {date && (
          <div className="flex items-center gap-1.5 text-xs font-medium uppercase tracking-wider text-text-tertiary">
            <Icon name="CalendarClock" size={14} />
            {date}
          </div>
        )}
        <h3
          className="text-lg font-semibold text-text-primary group-hover:text-brand transition-colors"
          dangerouslySetInnerHTML={{ __html: post.title }}
        />
        {excerpt && <p className="text-sm text-text-secondary line-clamp-3">{excerpt}</p>}
        <span className="mt-auto inline-flex items-center gap-1 text-sm font-medium text-brand opacity-0 group-hover:opacity-100 transition-opacity">
          Read article
          <Icon name="ArrowRight" size={15} />
        </span>
      </div>
    </Link>
  );
}
