import { DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/DropdownMenu';
import { User } from 'next-auth';
import { FC } from 'react';

interface UserAccountNavProps {
    user: Pick<User, "name" | "image" | "email">;
};

const UserAccountNav: FC<UserAccountNavProps> = ( {user }) => {
    return (
        <DropdownMenuItem>
            <DropdownMenuTrigger>

            </DropdownMenuTrigger>
        </DropdownMenuItem>
    )
}

export default UserAccountNav;