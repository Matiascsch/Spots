import User, { IUser } from "./userModel";

export type UserCreateInput = {
    username: string;
    email: string;
    password: string;
};

export type UserUpdateInput = Partial<UserCreateInput>;

export const createUser = async (data: UserCreateInput): Promise<IUser> => {
    return User.create(data);
};

export const getUserById = async (id: string): Promise<IUser | null> => {
    return User.findById(id).exec();
};

export const getUserByEmail = async (email: string): Promise<IUser | null> => {
    return User.findOne({ email }).exec();
};

export const getUserByUsername = async (username: string): Promise<IUser | null> => {
    return User.findOne({ username }).exec();
};

export const listUsers = async (): Promise<IUser[]> => {
    return User.find().exec();
};

export const updateUserById = async (
    id: string,
    updates: UserUpdateInput
): Promise<IUser | null> => {
    return User.findByIdAndUpdate(id, updates, { new: true }).exec();
};

export const deleteUserById = async (id: string): Promise<IUser | null> => {
    return User.findByIdAndDelete(id).exec();
};
