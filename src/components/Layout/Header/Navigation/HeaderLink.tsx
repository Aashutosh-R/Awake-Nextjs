import { HeaderItem } from '@/types/menu'
import clsx from 'clsx'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const HeaderLink: React.FC<{ item: HeaderItem }> = ({ item }) => {
  const path = usePathname()

  const linkclasses = clsx(
    'text-base font-medium text-black/60 px-4 py-2 rounded-full hover:bg-white hover:text-black hover:shadow',
    {
      '!text-black !bg-white !shadow': item.href === path,
      'text-black bg-white shadow': path.startsWith(
        `/${item.label.toLowerCase().replace(/\s+/g, '-')}}`
      ),
    }
  )

  return (
    <li>
      <Link href={item.href} className={linkclasses}>
        {item.label}
      </Link>
    </li>
  )
}

export default HeaderLink
