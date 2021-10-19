const buildUserDto = (data) => {
    const dto = {
        email: data.email,
        password: data.password,
        Profiles: {
            name: data.name,
            lastname: data.lastname,
            imageUrl: data.imageUrl,
            coverUrl: data.coverUrl,
            address: data.address
        },
    };
    return dto;
};
export { buildUserDto };