<template>
  <div>
    <h2>User List</h2>
    <table class="table">
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in users" :key="user.id">
          <td>{{ user.id }}</td>
          <td>{{ user.name }}</td>
        </tr>
      </tbody>
    </table>
    <nav aria-label="Page navigation">
      <ul class="pagination">
        <li class="page-item" :class="{ disabled: currentPage === 1 }">
          <a
            class="page-link"
            href="#"
            @click.prevent="changePage(currentPage - 1)"
            >Previous</a
          >
        </li>
        <li
          v-for="page in totalPages"
          :key="page"
          class="page-item"
          :class="{ active: page === currentPage }"
        >
          <a class="page-link" href="#" @click.prevent="changePage(page)">{{
            page
          }}</a>
        </li>
        <li class="page-item" :class="{ disabled: currentPage === totalPages }">
          <a
            class="page-link"
            href="#"
            @click.prevent="changePage(currentPage + 1)"
            >Next</a
          >
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
import { computed, onMounted } from "vue";
import { useUserStore } from "../store/user";

export default {
  setup() {
    const userStore = useUserStore();

    onMounted(() => {
      userStore.fetchUsers();
    });

    const changePage = (page) => {
      if (page >= 1 && page <= userStore.totalPages) {
        userStore.fetchUsers(page);
      }
    };

    return {
      users: computed(() => userStore.users),
      totalPages: computed(() => userStore.totalPages),
      currentPage: computed(() => userStore.currentPage),
      changePage,
    };
  },
};
</script>
