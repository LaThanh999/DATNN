<template>
  <div>
    <v-carousel height="280px" hide-delimiters>
      <v-carousel-item
        v-for="(item, i) in items"
        :key="i"
        :src="item.src"
      ></v-carousel-item>
    </v-carousel>
    <v-row class="mt-4">
      <v-col cols="8" class="d-flex align-center">
        <h3>
          Khu chung cư cao cấp quận 1, đầy đủ tiện nghi gần ngay khu trung tâm
        </h3>
      </v-col>
      <v-col cols="4" class="d-flex justify-end">
        <v-rating
          :value="4.5"
          color="amber"
          dense
          half-increments
          readonly
          size="25"
        ></v-rating>
      </v-col>
      <v-col cols="12">
        <div class="text-subtitle-1">
          <h4>Giá tiền: 8.000.000đ/tháng</h4>
          <h4>
            Địa chỉ:1073/63b Đường Cách Mạng Tháng Tám, Phường 7, Quận Tân Bình,
            Hồ Chí Minh
          </h4>
        </div>
      </v-col>
      <v-col cols="12">
        <v-card class="mx-auto">
          <v-card-text>
            <p class="text-h4 text--primary">Thông tin chi tiết</p>
            <p>
              Căn hộ studio cao cấp full nội thất trong khu cư xá Tự Do vip nhất
              quận Tân Bình, gần BV Thống Nhất, ngã tư Bảy Hiền.
            </p>
            <div class="text--primary">
              Địa chỉ tòa nhà: Khu cư xá Tự Do, khu 1073 Cách Mạng Tháng Tám,
              P.7, Q.Tân Bình.<br />
              * Ưu điểm nổi bậc <br />
              + Thiết kế: căn hộ được thiết kế với phong cách không gian mở,
              hiện đại <br />
              + Vị trí: nằm gần BV Thống Nhất, ngã tư Bảy Hiền, giáp với các
              quận 3, Phú Nhuận, 10 <br />
              + Khuôn viên: tòa nhà nằm trong khu riêng biệt dân trí rất cao và
              an ninh với công viên cây xanh và khu tập thể dục, khu vui chơi
              trẻ em. Đây là điểm nổi bậc nhất của tòa nhà, hầu như ai đến cũng
              rất bất ngờ khi vào khuôn viên của tòa nhà
              <br />
              + Đậu xe: có hầm để xe máy rộng rãi, xe hơi có thể đậu trước nhà
              và quanh công viên thoải mái, an toàn.
              <br />
              + Trang thiết bị: trang thiết bị nội thất là các thương hiệu nổi
              tiếng và mới 100% như: thiết bị điện Panasonic, thiết bị vệ sinh
              Toto, máy giặt cửa trước cho từng phòng Electrolux, máy lạnh Gree,
              tủlạnh Sharp, tivi Sharp,…
              <br />
              *Tiện ích: <br />
              + Diện tích phòng 27 – 50 m2, mỗi phòng có 1 phòng ngủ, phòng vệ
              sinh, bếp có máy hút khói và bếp từ âm bàn.
              <br />
              + Trang bị đầy đủ nội thất: niệm, tấm trải giường, mền, gối, thùng
              rác, rổ để đồ,.. <br />
              + Hệ thống cửa từ bảo mật cho từng phòng. <br />
              + Wifi tốc độ cao với đường truyền 150mb, điện 3 pha <br />
              + Sân phơi đồ rộng rãi thông thoáng. <br />
            </div>
          </v-card-text>
          <v-card-actions>
            <v-btn text color="deep-purple accent-4"> Liên hệ </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: "Detail",
  data: () => ({
    items: [
      {
        src: "https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg",
      },
      {
        src: "https://cdn.vuetifyjs.com/images/carousel/sky.jpg",
      },
      {
        src: "https://cdn.vuetifyjs.com/images/carousel/bird.jpg",
      },
      {
        src: "https://cdn.vuetifyjs.com/images/carousel/planet.jpg",
      },
    ],
  }),
};
</script>

<style scoped></style>
