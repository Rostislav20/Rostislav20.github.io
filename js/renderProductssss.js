const ElfBar15 = document.querySelector('#ElfBar15');
const ElfBar20 = document.querySelector('#ElfBar20');
const ElfBar36 = document.querySelector('#ElfBar36');
const ElfBar5 = document.querySelector('#ElfBar5');
const ElfBar50 = document.querySelector('#ElfBar50');
const ger = document.querySelector('#ger');
const MyPods = document.querySelector('#MyPods');
// Запускаем getProducts
getProductssss();

// Асинхронная функция получения данных из файла products.json
async function getProductssss() {
	// Получаем данные из products.json 
    const responseeee = await fetch('./js/productssss.json');
    // Парсим данные из JSON формата в JS
    const productsArrayyyy = await responseeee.json();
    // Запускаем ф-ю рендера (отображения товаров)
	renderProductssss(productsArrayyyy);
}

function renderProductssss(productsArrayyyy) {
    productsArrayyyy.forEach(function (item) {
		
		if (item.name == "Elf Bar") {
			const klh = item.descr;

        const productHTML = `<div class="${item.name}">
						
						<div class="card" data-id="${item.id}">
						<div class="postavshik">${item.postavshik}</div>
							<img class="product-img" src="img/Odnorazki/Elf Bar  1500(ORIGINAL)/${item.imgSrc}" alt="">
							<div class="card-body text-center">
								<h4 class="item-title">${item.title}</h4>
								<p><small data-items-in-box class="text-muted">${item.itemsInBox} шт. в наявності</small><button data-info class="btninfo">i</button></p>

								<div class="details-wrapper">

									<!-- Счетчик -->
									<div class="items counter-wrapper">
										<button class="items__control" data-action="minus">-</button>
										<div class="items__current" data-counter>1</div>
										<button class="items__control" data-action="plus">+</button>
									</div>
									<!-- // Счетчик -->

									<div class="price">
										<div class="price__weight">${item.weight}г.</div>
										<div class="price__currency">${item.price}</div>
										<div class="price__grn">грн</div>
									</div>
								</div>
								
								<button data-cart type="button" id="modalclick" class="btn btn-block btn-outline-warning">
									+ в корзину
								</button>
								<div class="infocard infocard_active">
								<div class="ingh">${item.descr}</div>
								<button type="button" class="btnback">
									Назад
								</button>
								
						</div>
							</div>
						</div>
						
						
					</div>`;
                    ElfBar15.insertAdjacentHTML('beforeend', productHTML);
		}
		if (item.name == "Elf Bar20") {
			const productHTML = `<div class="${item.name}">
				
							<div class="card" data-id="${item.id}">
							<div class="postavshik">${item.postavshik}</div>
								<img class="product-img" src="img/Odnorazki/Elf Bar  2000(ORIGINAL)/${item.imgSrc}" alt="">
								<div class="card-body text-center">
									<h4 class="item-title">${item.title}</h4>
									<p><small data-items-in-box class="text-muted">${item.itemsInBox} шт. в наявності</small><button data-info class="btninfo">i</button></p>
	
									<div class="details-wrapper">
	
										<!-- Счетчик -->
										<div class="items counter-wrapper">
											<button class="items__control" data-action="minus">-</button>
											<div class="items__current" data-counter>1</div>
											<button class="items__control" data-action="plus">+</button>
										</div>
										<!-- // Счетчик -->
	
										<div class="price">
											<div class="price__weight">${item.weight}г.</div>
											<div class="price__currency">${item.price}</div>
											<div class="price__grn">грн</div>
										</div>
									</div>
									
									<button data-cart type="button" id="modalclick" class="btn btn-block btn-outline-warning">
										+ в корзину
									</button>
									<div class="infocard infocard_active">
								<div class="ingh">${item.descr}</div>
								<button type="button" class="btnback">
									Назад
								</button>
								
						</div>
								</div>
							</div>
						</div>`;
                        ElfBar20.insertAdjacentHTML('beforeend', productHTML);
			}
			if (item.name == "Elf Bar36") {
				const productHTML = `<div class="${item.name}">
								<div class="card" data-id="${item.id}">
								<div class="postavshik">${item.postavshik}</div>
									<img class="product-img" src="img/Odnorazki/Elf Bar  3600(ORIGINAL)/${item.imgSrc}" alt="">
									<div class="card-body text-center">
										<h4 class="item-title">${item.title}</h4>
										<p><small data-items-in-box class="text-muted">${item.itemsInBox} шт. в наявності</small><button data-info class="btninfo">i</button></p>
		
										<div class="details-wrapper">
		
											<!-- Счетчик -->
											<div class="items counter-wrapper">
												<button class="items__control" data-action="minus">-</button>
												<div class="items__current" data-counter>1</div>
												<button class="items__control" data-action="plus">+</button>
											</div>
											<!-- // Счетчик -->
		
											<div class="price">
												<div class="price__weight">${item.weight}г.</div>
												<div class="price__currency">${item.price}</div>
												<div class="price__grn">грн</div>
											</div>
										</div>
										
										<button data-cart type="button" id="modalclick" class="btn btn-block btn-outline-warning">
											+ в корзину
										</button>
										<div class="infocard infocard_active">
										<div class="ingh">${item.descr}</div>
										<button type="button" class="btnback">
											Назад
										</button>
										
								</div>
									</div>
								</div>
							</div>`;
							ElfBar36.insertAdjacentHTML('beforeend', productHTML);
				}
				if (item.name == "Elf Bar Ultra") {
					const productHTML = `<div class="${item.name}">
									
									<div class="card" data-id="${item.id}">
									<div class="postavshik">${item.postavshik}</div>
										<img class="product-img" src="img/Odnorazki/Elf Bar  5000(ORIGINAL)/${item.imgSrc}" alt="">
										<div class="card-body text-center">
											<h4 class="item-title">${item.title}</h4>
											<p><small data-items-in-box class="text-muted">${item.itemsInBox} шт. в наявності</small><button data-info class="btninfo">i</button></p>
			
											<div class="details-wrapper">
			
												<!-- Счетчик -->
												<div class="items counter-wrapper">
													<button class="items__control" data-action="minus">-</button>
													<div class="items__current" data-counter>1</div>
													<button class="items__control" data-action="plus">+</button>
												</div>
												<!-- // Счетчик -->
			
												<div class="price">
													<div class="price__weight">${item.weight}г.</div>
													<div class="price__currency">${item.price}</div>
													<div class="price__grn">грн</div>
												</div>
											</div>
											
											<button data-cart type="button" id="modalclick" class="btn btn-block btn-outline-warning">
												+ в корзину
											</button>
											<div class="infocard infocard_active">
								<div class="ingh">${item.descr}</div>
								<button type="button" class="btnback">
									Назад
								</button>
								
						</div>
										</div>
									</div>
									
									
								</div>`;
                                ElfBar5.insertAdjacentHTML('beforeend', productHTML);
					}
					if (item.name == " Lost Mary  (Бренд Elf Bar)  ") {
						const productHTML = `<div class="${item.name}">
										
										<div class="card" data-id="${item.id}">
										<div class="postavshik">${item.postavshik}</div>
											<img class="product-img" src="img/Odnorazki/Lost Mary Elf Bar 5000/${item.imgSrc}" alt="">
											<div class="card-body text-center">
												<h4 class="item-title">${item.title}</h4>
												<p><small data-items-in-box class="text-muted">${item.itemsInBox} шт. в наявності</small><button data-info class="btninfo">i</button></p>
				
												<div class="details-wrapper">
				
													<!-- Счетчик -->
													<div class="items counter-wrapper">
														<button class="items__control" data-action="minus">-</button>
														<div class="items__current" data-counter>1</div>
														<button class="items__control" data-action="plus">+</button>
													</div>
													<!-- // Счетчик -->
				
													<div class="price">
														<div class="price__weight">${item.weight}г.</div>
														<div class="price__currency">${item.price}</div>
														<div class="price__grn">грн</div>
													</div>
												</div>
												
												<button data-cart type="button" id="modalclick" class="btn btn-block btn-outline-warning">
													+ в корзину
												</button>
												<div class="infocard infocard_active">
											<div class="ingh">${item.descr}</div>
											<button type="button" class="btnback">
												Назад
											</button>
											
											</div>
											</div>
										</div>
										
										
									</div>`;
                                    ElfBar50.insertAdjacentHTML('beforeend', productHTML);
						}
						if (item.name == " 3GER ") {
							const productHTML = `<div class="${item.name}">
											
											<div class="card" data-id="${item.id}">
											<div class="postavshik">${item.postavshik}</div>
												<img class="product-img" src="img/Odnorazki/3GER/${item.imgSrc}" alt="">
												<div class="card-body text-center">
													<h4 class="item-title">${item.title}</h4>
													<p><small data-items-in-box class="text-muted">${item.itemsInBox} шт. в наявності</small><button data-info class="btninfo">i</button></p>
					
													<div class="details-wrapper">
					
														<!-- Счетчик -->
														<div class="items counter-wrapper">
															<button class="items__control" data-action="minus">-</button>
															<div class="items__current" data-counter>1</div>
															<button class="items__control" data-action="plus">+</button>
														</div>
														<!-- // Счетчик -->
					
														<div class="price">
															<div class="price__weight">${item.weight}г.</div>
															<div class="price__currency">${item.price}</div>
															<div class="price__grn">грн</div>
														</div>
													</div>
													
													<button data-cart type="button" id="modalclick" class="btn btn-block btn-outline-warning">
														+ в корзину
													</button>
													<div class="infocard infocard_active">
															<div class="ingh">${item.descr}</div>
															<button type="button" class="btnback">
																Назад
															</button>
															
													</div>
												</div>
											</div>
											
											
										</div>`;
									ger.insertAdjacentHTML('beforeend', productHTML);
							}
							if (item.name == " MyPods ") {
								const klh = item.descr;
					
							const productHTML = `<div class="${item.name}">
											
											<div class="card" data-id="${item.id}">
											<div class="postavshik">${item.postavshik}</div>
												<img class="product-img" src="img/Odnorazki/MyPods/${item.imgSrc}" alt="">
												<div class="card-body text-center">
													<h4 class="item-title">${item.title}</h4>
													<p><small data-items-in-box class="text-muted">${item.itemsInBox} шт. в наявності</small><button data-info class="btninfo">i</button></p>
					
													<div class="details-wrapper">
					
														<!-- Счетчик -->
														<div class="items counter-wrapper">
															<button class="items__control" data-action="minus">-</button>
															<div class="items__current" data-counter>1</div>
															<button class="items__control" data-action="plus">+</button>
														</div>
														<!-- // Счетчик -->
					
														<div class="price">
															<div class="price__weight">${item.weight}г.</div>
															<div class="price__currency">${item.price}</div>
															<div class="price__grn">грн</div>
														</div>
													</div>
													
													<button data-cart type="button" id="modalclick" class="btn btn-block btn-outline-warning">
														+ в корзину
													</button>
													<div class="infocard infocard_active">
													<div class="ingh">${item.descr}</div>
													<button type="button" class="btnback">
														Назад
													</button>
													
											</div>
												</div>
											</div>
											
											
										</div>`;
									MyPods.insertAdjacentHTML('beforeend', productHTML);
							}
    });

}
