"use client"

import { User } from 'next-auth';
import { FC } from 'react';
import Link from 'next/link';

import UserAvatar from '@/components/UserAvatar';
import { DropdownMenuTrigger, DropdownMenu, DropdownMenuContent, DropdownMenuItem } from '@/components/ui/DropdownMenu';
 
import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { signOut } from 'next-auth/react';

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
}

interface UserAccountNavProps {
    user: Pick<User, "name" | "image" | "email">;
};

const UserAccountNav: FC<UserAccountNavProps> = ( { user }) => {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger>
                <UserAvatar
                    className='h-8 w-8'
                    user={{
                        name: user.name || null,
                        image: user.image || null
                    }}
                />
            </DropdownMenuTrigger>

            <DropdownMenuContent className="bg-transparent shadow-transparent">
                <Menu>
                    <Transition
                        show={true} 
                        as={Fragment}
                        enter="transition ease-out duration-100"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                    >
                        <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                            <div className="px-4 py-3">
                                <p className="text-sm">
                                    {
                                        user.name && 
                                        <p className='font-medium'>
                                            {user.name}
                                        </p>
                                    }
                                </p>
                                <p className="truncate text-sm font-medium text-gray-900">
                                    {
                                        user.email && 
                                        <p className='w-[200px] truncate text-sm text-zinc-700'>
                                            {user.email}
                                        </p>
                                    }
                                </p>
                            </div>

                            <div className="py-1">
                                <Menu.Item>
                                {({ active }) => (
                                    <Link
                                        href="/"
                                        className={
                                            classNames(
                                                active ? 'bg-gray-100 text-gray-900' : 'text-gray-700', 'block px-4 py-2 text-sm'
                                            )}
                                    >
                                    Feed
                                    </Link>
                                )}
                                </Menu.Item>
                                <Menu.Item>
                                {({ active }) => (
                                    <Link
                                        href="/b/create"
                                        className={
                                            classNames(
                                                active ? 'bg-gray-100 text-gray-900' : 'text-gray-700', 'block px-4 py-2 text-sm'
                                            )
                                        }
                                    >
                                    Create Community
                                    </Link>
                                )}
                                </Menu.Item>
                                <Menu.Item>
                                {({ active }) => (
                                    <Link
                                        href="/settings"
                                        className={
                                            classNames(
                                                active ? 'bg-gray-100 text-gray-900' : 'text-gray-700', 'block px-4 py-2 text-sm'
                                            )
                                        }
                                    >
                                    Settings
                                    </Link>
                                )}
                                </Menu.Item>
                            </div>
                            <DropdownMenuItem
                                onSelect={(event) => {
                                    event.preventDefault();
                                    signOut({ callbackUrl: `${window.location.origin}/sign-in` })
                                }}
                                className='block w-full px-4 py-2 text-left text-sm cursor-pointer'
                            >
                            Sign out
                            </DropdownMenuItem>
                        </Menu.Items>
                    </Transition>
                </Menu>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}

export default UserAccountNav;