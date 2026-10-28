/**
 * YRAMOS - INGENIERÍA, CONSTRUCCIÓN Y SOLUCIONES EN INFRAESTRUCTURA
 * JavaScript Interactivo, Simulador de Costos, Cobertura Nacional y Bitácora Técnica
 */

document.addEventListener('DOMContentLoaded', () => {
  'use strict';

  // =========================================================================
  // 1. BASE DE DATOS LOCAL DE PROYECTOS EMBLEMÁTICOS (PARA MODAL TÉCNICO)
  // =========================================================================
  const projectsData = {
    1: {
      title: 'Plataformas y Conformación Masiva Minera Aurora',
      category: 'Movimiento de Tierras Masivo',
      status: 'Finalizado',
      statusClass: 'status-completed',
      location: 'Arequipa, Perú (3,850 m.s.n.m.)',
      duration: '14 Meses (2024 - 2025)',
      volume: '450,000 m³ Excavación en Roca y Suelo',
      machinery: 'CAT 336D2 L (4 un.), Komatsu D85EX (3 un.), Volquetes 6x4 (12 un.)',
      image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=1200&q=85',
      description: 'Ejecución integral de movimiento de tierras para la ampliación de planta concentradora y plataformas de lixiviación. Se realizaron voladuras controladas, cortes en roca fija, conformación de banquetas y estabilización de taludes con mallas electrosoldadas y concreto lanzado (shotcrete), logrando cero accidentes incapacitantes en más de 180,000 horas-hombre.'
    },
    2: {
      title: 'Centro Logístico & Torre Corporativa Platinum',
      category: 'Edificaciones Civiles e Industriales',
      status: 'En Ejecución',
      statusClass: 'status-ongoing',
      location: 'Lima Norte, Perú',
      duration: 'En Desarrollo Activo (2025 - 2026)',
      volume: '22,000 m² Techados / 14m Excavación',
      machinery: 'Pilotera rotativa, Excavadoras CAT 320, Grúas Torre 50m',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=85',
      description: 'Construcción estructural de un complejo corporativo de 12 niveles y 4 sótanos. Se implementaron muros pantalla perimetrales autoportantes de 14 metros de profundidad, zapatas combinadas masivas y losas postensadas de alta resistencia para almacenamiento industrial de carga pesada.'
    },
    3: {
      title: 'Corredor Vial Bicentenario & Pasos a Desnivel',
      category: 'Infraestructura Vial',
      status: 'Finalizado',
      statusClass: 'status-completed',
      location: 'Ica - Nazca, Perú',
      duration: '18 Meses (2023 - 2024)',
      volume: '38.5 Kilómetros de Pavimento Asfáltico',
      machinery: 'Pavimentadoras Vögele, Rodillos CAT CS56B, Motoniveladoras 140K',
      image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=85',
      description: 'Rehabilitación y ampliación a 4 carriles de autopista de alto tránsito. Obras de drenaje pluvial transversal, alcantarillas tipo marco, subdrenes, pavimentación con mezcla asfáltica en caliente modificada con polímeros y señalización reglamentaria de alta visibilidad nocturna.'
    },
    4: {
      title: 'Mega Planta de Ensamblaje y Naves Estructurales',
      category: 'Infraestructura Industrial',
      status: 'Finalizado',
      statusClass: 'status-completed',
      location: 'Chilca Industrial, Lima',
      duration: '10 Meses (2024)',
      volume: '18,500 m² de losas y estructuras',
      machinery: 'Grúas telescópicas 80t, Rodillos tándem, Allanadoras dobles',
      image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=85',
      description: 'Ingeniería y construcción civil de naves industriales con estructuras metálicas de luz libre de 35 metros. Diseño de pisos industriales sin juntas (jointless) con fibras metálicas y endurecedor superficial mineral para resistir tránsito continuo de montacargas de alta capacidad.'
    },
    5: {
      title: 'Puente Atirantado San Jerónimo y Defensas Ribereñas',
      category: 'Obras Viales & Puentes',
      status: 'En Ejecución',
      statusClass: 'status-ongoing',
      location: 'Junín, Perú',
      duration: 'Culminación Prevista 2026',
      volume: '120m Luz Libre / 850m Defensas',
      machinery: 'Excavadoras de brazo largo, Grúas sobre orugas, Bombas de concreto',
      image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=85',
      description: 'Ejecución de puente vehicular atirantado sobre cauce torrentoso. Cimentaciones mediante caissones y pilotes de 1.50m de diámetro empotrados en roca, además de muros de enrocado con geotextil para protección ribereña contra crecidas aluvionales estacionales.'
    },
    6: {
      title: 'Presa de Regulación Hídrica y Dique de Contención',
      category: 'Movimiento de Tierras Masivo',
      status: 'Finalizado',
      statusClass: 'status-completed',
      location: 'Moquegua, Perú',
      duration: '12 Meses (2023)',
      volume: '320,000 m³ Relleno Compactado',
      machinery: 'Rodillos pata de cabra, Tractores D8T, Excavadoras CAT 336',
      image: 'https://images.unsplash.com/photo-1590486803833-1c5dc8ddd4c8?auto=format&fit=crop&w=1200&q=85',
      description: 'Construcción de presa de tierra zonificada con núcleo de arcilla impermeable para almacenamiento y control de aguas de escorrentía. Instrumentación geotécnica con piezómetros de cuerda vibrante y vertedero de concreto armado con rápida disipadora de energía.'
    }
  };

  // =========================================================================
  // 2. HEADER STICKY & NAVEGACIÓN ACTIVA EN SCROLL
  // =========================================================================
  const header = document.getElementById('header');
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('section[id], footer[id]');
  const backToTopBtn = document.getElementById('backToTop');

  window.addEventListener('scroll', () => {
    const scrollPos = window.scrollY;

    // Header fondo sólido al scrollear
    if (scrollPos > 60) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }

    // Botón Volver Arriba
    if (scrollPos > 400) {
      backToTopBtn.classList.add('visible');
    } else {
      backToTopBtn.classList.remove('visible');
    }

    // Indicador activo de enlace de navegación
    let currentSectionId = '';
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 120;
      const sectionHeight = section.offsetHeight;
      if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
        currentSectionId = section.getAttribute('id');
      }
    });

    if (currentSectionId) {
      navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${currentSectionId}`) {
          link.classList.add('active');
        }
      });
    }
  }, { passive: true });

  // Botón volver arriba click
  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }

  // =========================================================================
  // 3. MENÚ RESPONSIVE MOBILE
  // =========================================================================
  const mobileToggle = document.getElementById('mobileToggle');
  const navMenu = document.getElementById('navMenu');

  if (mobileToggle && navMenu) {
    mobileToggle.addEventListener('click', () => {
      const isOpen = navMenu.classList.toggle('open');
      mobileToggle.classList.toggle('active', isOpen);
      mobileToggle.setAttribute('aria-expanded', isOpen);
      document.body.style.overflow = isOpen ? 'hidden' : '';
    });

    // Cerrar menú al hacer click en cualquier link
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('open');
        mobileToggle.classList.remove('active');
        mobileToggle.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
      });
    });
  }

  // =========================================================================
  // 4. CONTADORES ANIMADOS DE IMPACTO (CIFRAS CLAVE)
  // =========================================================================
  const counters = document.querySelectorAll('.counter');
  let countersAnimated = false;

  const animateCounters = () => {
    counters.forEach(counter => {
      const target = parseInt(counter.getAttribute('data-target'), 10);
      const duration = 2000;
      const startTime = performance.now();

      const updateCounter = (currentTime) => {
        const elapsedTime = currentTime - startTime;
        const progress = Math.min(elapsedTime / duration, 1);
        const easeOutQuad = 1 - Math.pow(1 - progress, 3);
        const currentVal = Math.floor(easeOutQuad * target);

        counter.textContent = currentVal;

        if (progress < 1) {
          requestAnimationFrame(updateCounter);
        } else {
          counter.textContent = target;
        }
      };

      requestAnimationFrame(updateCounter);
    });
  };

  const metricsSection = document.getElementById('cifras');
  if (metricsSection) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !countersAnimated) {
          countersAnimated = true;
          animateCounters();
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.25 });

    observer.observe(metricsSection);
  }

  // =========================================================================
  // 5. FILTRADO INTERACTIVO DE PROYECTOS
  // =========================================================================
  const filterBtns = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filterValue = btn.getAttribute('data-filter');

      projectCards.forEach(card => {
        const cardCategory = card.getAttribute('data-category');

        if (filterValue === 'all' || cardCategory === filterValue) {
          card.style.display = 'flex';
          card.style.opacity = '0';
          card.style.transform = 'translateY(15px)';
          setTimeout(() => {
            card.style.transition = 'all 0.4s ease';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
          }, 40);
        } else {
          card.style.display = 'none';
        }
      });
    });
  });

  // =========================================================================
  // 6. MODAL DINÁMICO DE FICHA TÉCNICA
  // =========================================================================
  const modal = document.getElementById('projectModal');
  const modalBody = document.getElementById('modalBody');
  const modalCloseBtn = document.getElementById('modalCloseBtn');

  const openProjectModal = (projectId) => {
    const project = projectsData[projectId];
    if (!project) return;

    modalBody.innerHTML = `
      <div class="modal-content-grid">
        <div class="modal-hero-img-wrap">
          <img src="${project.image}" alt="${project.title}" class="modal-hero-img">
        </div>
        <div class="modal-details-padding">
          <div class="modal-header-meta">
            <span class="badge-status ${project.statusClass}">
              <i class="fa-solid ${project.statusClass === 'status-completed' ? 'fa-circle-check' : 'fa-spinner fa-spin'}"></i>
              ${project.status}
            </span>
            <span class="badge-category">${project.category}</span>
          </div>

          <h2 class="modal-project-title">${project.title}</h2>
          
          <div class="modal-specs-grid">
            <div class="modal-spec-item">
              <strong>Ubicación Geográfica:</strong>
              <span>${project.location}</span>
            </div>
            <div class="modal-spec-item">
              <strong>Plazo / Estado:</strong>
              <span>${project.duration}</span>
            </div>
            <div class="modal-spec-item">
              <strong>Magnitud de Obra:</strong>
              <span>${project.volume}</span>
            </div>
          </div>

          <div style="margin-bottom: 1.2rem;">
            <strong style="color: var(--navy-900); font-family: var(--font-heading); display: block; margin-bottom: 0.3rem;">
              <i class="fa-solid fa-truck-monster text-amber"></i> Maquinaria Pesada Desplegada:
            </strong>
            <p style="font-size: 0.9rem; color: var(--steel-600);">${project.machinery}</p>
          </div>

          <div style="margin-bottom: 2rem;">
            <strong style="color: var(--navy-900); font-family: var(--font-heading); display: block; margin-bottom: 0.4rem;">
              <i class="fa-solid fa-file-contract text-amber"></i> Memoria Descriptiva & Solución Técnica:
            </strong>
            <p style="font-size: 0.92rem; color: var(--steel-600); line-height: 1.65;">
              ${project.description}
            </p>
          </div>

          <div style="display: flex; gap: 1rem; flex-wrap: wrap;">
            <a href="#cotizar" class="btn btn-primary modal-action-btn">
              <i class="fa-solid fa-calculator"></i>
              <span>Cotizar Proyecto Similar</span>
            </a>
            <a href="https://wa.me/51954395659?text=Hola%20YRAMOS%2C%20quisiera%20m%C3%A1s%20detalles%20del%20proyecto%20${encodeURIComponent(project.title)}" target="_blank" rel="noopener noreferrer" class="btn btn-whatsapp-direct">
              <i class="fa-brands fa-whatsapp"></i>
              <span>Consultar por WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    `;

    modal.classList.add('active');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';

    const modalQuoteBtn = modalBody.querySelector('.modal-action-btn');
    if (modalQuoteBtn) {
      modalQuoteBtn.addEventListener('click', closeProjectModal);
    }
  };

  const closeProjectModal = () => {
    modal.classList.remove('active');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  };

  projectCards.forEach(card => {
    card.addEventListener('click', () => {
      const projectId = card.getAttribute('data-project-id');
      if (projectId) openProjectModal(projectId);
    });
  });

  if (modalCloseBtn) modalCloseBtn.addEventListener('click', closeProjectModal);

  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeProjectModal();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
      closeProjectModal();
    }
  });

  // =========================================================================
  // 7. SECCIÓN 1: SIMULADOR DE COSTOS Y RENDIMIENTO DE HORAS-MÁQUINA
  // =========================================================================
  const machineryCatalog = {
    cat336: {
      name: 'Excavadora Hidráulica CAT 336D2 L (36 Ton)',
      baseRate: 90,
      prodRate: 180, // m3 por hora
      prodUnit: 'm³ Removidos',
      fuelAvg: '7.8 gal / h',
      mobilization: '24 a 48h (Cama Baja 50t)'
    },
    cat320: {
      name: 'Excavadora Hidráulica CAT 320 GC (20 Ton)',
      baseRate: 65,
      prodRate: 110,
      prodUnit: 'm³ Removidos',
      fuelAvg: '5.2 gal / h',
      mobilization: 'Inmediata (&lt; 24h)'
    },
    komatsuD85: {
      name: 'Tractor de Oruga Komatsu D85EX-15 (264 HP)',
      baseRate: 95,
      prodRate: 220,
      prodUnit: 'm³ Empujados',
      fuelAvg: '8.4 gal / h',
      mobilization: '24 a 48h (Cama Baja 40t)'
    },
    cat140: {
      name: 'Motoniveladora CAT 140K (190 HP - 14 pies)',
      baseRate: 68,
      prodRate: 180,
      prodUnit: 'm² Nivelados / hora',
      fuelAvg: '5.0 gal / h',
      mobilization: 'Inmediata (&lt; 24h)'
    },
    catCS56: {
      name: 'Rodillo Vibratorio CAT CS56B (12.5 Ton)',
      baseRate: 58,
      prodRate: 250,
      prodUnit: 'm² Compactados / hora',
      fuelAvg: '4.2 gal / h',
      mobilization: 'Inmediata (&lt; 24h)'
    },
    volquete15: {
      name: 'Camión Volquete 6x4 Volvo FMX (15 m³)',
      baseRate: 48,
      prodRate: 15,
      prodUnit: 'm³ / viaje promedio',
      fuelAvg: '4.8 gal / h',
      mobilization: 'Inmediata (Flota en patio)'
    }
  };

  const simEquipmentSelect = document.getElementById('simEquipmentSelect');
  const simUnitsInput = document.getElementById('simUnits');
  const btnQtyMinus = document.getElementById('btnQtyMinus');
  const btnQtyPlus = document.getElementById('btnQtyPlus');
  const simLocationSelect = document.getElementById('simLocationSelect');
  const simHoursRange = document.getElementById('simHoursRange');
  const simHoursDisplay = document.getElementById('simHoursDisplay');
  const tickBtns = document.querySelectorAll('.tick-btn');
  const modalityRadios = document.querySelectorAll('input[name="simModality"]');

  // Outputs
  const simOutputEquipName = document.getElementById('simOutputEquipName');
  const simTotalCost = document.getElementById('simTotalCost');
  const simHourlyRate = document.getElementById('simHourlyRate');
  const simPerformanceVal = document.getElementById('simPerformanceVal');
  const simFuelVal = document.getElementById('simFuelVal');
  const simMobilizationVal = document.getElementById('simMobilizationVal');
  const btnSimWhatsApp = document.getElementById('btnSimWhatsApp');
  const btnTransferToQuote = document.getElementById('btnTransferToQuote');

  const calculateSimulation = () => {
    if (!simEquipmentSelect) return;

    const equipKey = simEquipmentSelect.value;
    const equip = machineryCatalog[equipKey] || machineryCatalog.cat336;
    const units = parseInt(simUnitsInput.value, 10) || 1;
    const hours = parseInt(simHoursRange.value, 10) || 120;
    
    // Factor de ubicación (Sierra / Altura tiene recargo por altitud y lubricantes especiales)
    const locOption = simLocationSelect.options[simLocationSelect.selectedIndex];
    const locFactor = parseFloat(locOption.getAttribute('data-factor')) || 1.0;

    // Recargo por modalidad (Operador +22 USD/h, Integral +50 USD/h)
    let modalityMarkup = 22;
    modalityRadios.forEach(r => {
      if (r.checked) modalityMarkup = parseFloat(r.getAttribute('data-markup')) || 0;
    });

    const hourlyRatePerUnit = Math.round((equip.baseRate + modalityMarkup) * locFactor);
    const totalEstimate = hourlyRatePerUnit * units * hours;
    const totalProd = Math.round(equip.prodRate * units * hours);

    // Actualizar UI
    simOutputEquipName.textContent = equip.name;
    simTotalCost.textContent = totalEstimate.toLocaleString('en-US');
    simHourlyRate.textContent = `Tarifa referencial: $${hourlyRatePerUnit}.00 USD / hora por unidad (${units} ${units === 1 ? 'unidad' : 'unidades'})`;
    simPerformanceVal.textContent = `~${totalProd.toLocaleString('en-US')} ${equip.prodUnit}`;
    simFuelVal.textContent = equip.fuelAvg;
    simMobilizationVal.textContent = equip.mobilization;
    simHoursDisplay.textContent = `${hours} Horas`;
  };

  if (simEquipmentSelect) {
    simEquipmentSelect.addEventListener('change', calculateSimulation);
    simLocationSelect.addEventListener('change', calculateSimulation);
    simHoursRange.addEventListener('input', () => {
      simHoursDisplay.textContent = `${simHoursRange.value} Horas`;
      tickBtns.forEach(b => b.classList.remove('active'));
      calculateSimulation();
    });

    // Control de cantidad
    btnQtyMinus.addEventListener('click', () => {
      let val = parseInt(simUnitsInput.value, 10);
      if (val > 1) {
        simUnitsInput.value = val - 1;
        calculateSimulation();
      }
    });

    btnQtyPlus.addEventListener('click', () => {
      let val = parseInt(simUnitsInput.value, 10);
      if (val < 10) {
        simUnitsInput.value = val + 1;
        calculateSimulation();
      }
    });

    // Presets de horas
    tickBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        tickBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const h = btn.getAttribute('data-hours');
        simHoursRange.value = h;
        simHoursDisplay.textContent = `${h} Horas`;
        calculateSimulation();
      });
    });

    // Modalidad
    modalityRadios.forEach(radio => {
      radio.addEventListener('change', calculateSimulation);
    });

    // Botón simular maquinaria desde las tarjetas de flota
    document.querySelectorAll('.machinery-sim-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const key = btn.getAttribute('data-equip-key');
        if (key && machineryCatalog[key]) {
          simEquipmentSelect.value = key;
          calculateSimulation();
        }
      });
    });

    // Botón Enviar Reserva Simulada vía WhatsApp
    btnSimWhatsApp.addEventListener('click', () => {
      const equip = machineryCatalog[simEquipmentSelect.value].name;
      const units = simUnitsInput.value;
      const hours = simHoursRange.value;
      const total = simTotalCost.textContent;
      const zone = simLocationSelect.options[simLocationSelect.selectedIndex].text;

      let modalityText = 'Equipo + Operador Homologado';
      modalityRadios.forEach(r => {
        if (r.checked) modalityText = r.parentElement.textContent.trim();
      });

      const message = `*SOLICITUD DE RESERVA DE MAQUINARIA - YRAMOS*%0A` +
        `----------------------------------------%0A` +
        `*Equipo:* ${encodeURIComponent(equip)}%0A` +
        `*Cantidad:* ${units} unidad(es)%0A` +
        `*Horas Proyectadas:* ${hours} horas%0A` +
        `*Modalidad:* ${encodeURIComponent(modalityText)}%0A` +
        `*Zona de Obra:* ${encodeURIComponent(zone)}%0A` +
        `*Estimación de Inversión:* USD $${total} (+ I.G.V.)%0A` +
        `----------------------------------------%0A` +
        `Solicito confirmación de disponibilidad técnica y costo final de flete de movilización.`;

      window.open(`https://wa.me/51954395659?text=${message}`, '_blank');
    });

    // Botón Transferir a Cotización Formal
    btnTransferToQuote.addEventListener('click', () => {
      const equip = machineryCatalog[simEquipmentSelect.value].name;
      const units = simUnitsInput.value;
      const hours = simHoursRange.value;
      const total = simTotalCost.textContent;

      const projectType = document.getElementById('projectType');
      const projectLocation = document.getElementById('projectLocation');
      const projectDetails = document.getElementById('projectDetails');

      if (projectType) {
        for (let i = 0; i < projectType.options.length; i++) {
          if (projectType.options[i].value.includes('Alquiler de Maquinaria')) {
            projectType.selectedIndex = i;
            break;
          }
        }
      }

      if (projectLocation) {
        projectLocation.value = simLocationSelect.options[simLocationSelect.selectedIndex].text.split('(')[0].trim();
      }

      if (projectDetails) {
        projectDetails.value = `Requerimiento de alquiler estimado con simulador: ${units}x ${equip} por ${hours} horas. Presupuesto estimado referencial: USD $${total}. Solicito contrato formal y visita técnica previa.`;
      }

      const quoteSec = document.getElementById('cotizar');
      if (quoteSec) {
        quoteSec.scrollIntoView({ behavior: 'smooth' });
      }
    });

    calculateSimulation();
  }

  // =========================================================================
  // 8. SECCIÓN 2: MAPA INTERACTIVO DE COBERTURA Y DESPLIEGUE NACIONAL
  // =========================================================================
  const regionalData = {
    centro: {
      title: 'Macrorregión Centro & Costa',
      desc: 'Sede central y mayor patio de maniobras de YRAMOS. Abastecimiento inmediato a proyectos de edificación corporativa, plataformas logísticas en Lurín/Chilca y obras viales de alta transitabilidad.',
      fronts: '6 Frentes',
      units: '22 Unidades',
      yard: 'Patio Central Industrial Lima',
      mobTime: '&lt; 24 Horas',
      project: 'Centro Logístico Platinum & Corredor Vial Sur',
      scope: '22,000 m² de losas industriales y 38.5 km de asfalto en caliente concluido con supervisión permanente.'
    },
    sur: {
      title: 'Macrorregión Sur & Cuenca Minera',
      desc: 'Base operativa en Arequipa y Moquegua especializada en operaciones sobre los 3,500 m.s.n.m. Excavaciones masivas en roca dura, presas de relave y conformación de diques de contención.',
      fronts: '4 Frentes',
      units: '18 Unidades',
      yard: 'Base Taller Arequipa Km 14',
      mobTime: '24 a 48 Horas',
      project: 'Plataformas Mineras Aurora & Presa San Pedro',
      scope: '450,000 m³ de excavación en roca andesítica y diques zonificados con impermeabilización geotécnica.'
    },
    sierra: {
      title: 'Sierra Central & Corredores Viales',
      desc: 'Frentes de trabajo en Junín, Pasco y Huánuco para estabilización de taludes, defensas ribereñas y puentes vehiculares atirantados sobre ríos de alta turbulencia aluvional.',
      fronts: '3 Frentes',
      units: '12 Unidades',
      yard: 'Base Taller Huancayo',
      mobTime: '36 a 48 Horas',
      project: 'Puente Atirantado San Jerónimo',
      scope: '120 metros de luz libre con pilonas de concreto masivo y 850m de muros de contención con gaviones.'
    },
    norte: {
      title: 'Macrorregión Norte & Obras Hidráulicas',
      desc: 'Despliegue en La Libertad y Piura para obras de saneamiento, canales de desvío pluvial y pavimentación urbana de alta resistencia para transporte pesado agroindustrial.',
      fronts: '2 Frentes',
      units: '8 Unidades',
      yard: 'Patio Trujillo Industrial',
      mobTime: '24 a 36 Horas',
      project: 'Canales de Drenaje & Vías de Acceso',
      scope: '14.2 kilómetros de canalización en concreto hidráulico y terraplenes de protección de cultivos.'
    }
  };

  const regionTabBtns = document.querySelectorAll('.region-tab-btn');
  const regionPins = document.querySelectorAll('.map-pin');
  const regionTitle = document.getElementById('regionTitle');
  const regionDescription = document.getElementById('regionDescription');
  const regionFronts = document.getElementById('regionFronts');
  const regionUnits = document.getElementById('regionUnits');
  const regionYard = document.getElementById('regionYard');
  const regionMobilization = document.getElementById('regionMobilization');
  const regionProjectName = document.getElementById('regionProjectName');
  const regionProjectScope = document.getElementById('regionProjectScope');
  const regionWhatsAppLink = document.getElementById('regionWhatsAppLink');

  const updateRegionalView = (regionKey) => {
    const data = regionalData[regionKey];
    if (!data) return;

    // Actualizar tabs
    regionTabBtns.forEach(btn => {
      btn.classList.toggle('active', btn.getAttribute('data-region') === regionKey);
    });

    // Actualizar pins
    regionPins.forEach(pin => {
      pin.classList.toggle('active', pin.getAttribute('data-region-target') === regionKey);
    });

    // Actualizar datos
    if (regionTitle) regionTitle.textContent = data.title;
    if (regionDescription) regionDescription.textContent = data.desc;
    if (regionFronts) regionFronts.textContent = data.fronts;
    if (regionUnits) regionUnits.textContent = data.units;
    if (regionYard) regionYard.textContent = data.yard;
    if (regionMobilization) regionMobilization.innerHTML = data.mobTime;
    if (regionProjectName) regionProjectName.textContent = data.project;
    if (regionProjectScope) regionProjectScope.textContent = data.scope;

    if (regionWhatsAppLink) {
      regionWhatsAppLink.href = `https://wa.me/51954395659?text=Hola%20YRAMOS%2C%20requiero%20asistencia%20operativa%20para%20la%20zona%20${encodeURIComponent(data.title)}`;
    }
  };

  regionTabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const region = btn.getAttribute('data-region');
      updateRegionalView(region);
    });
  });

  regionPins.forEach(pin => {
    pin.addEventListener('click', () => {
      const region = pin.getAttribute('data-region-target');
      updateRegionalView(region);
    });
  });

  // =========================================================================
  // 9. SECCIÓN 3: BITÁCORA TÉCNICA & MODAL DE ARTÍCULOS
  // =========================================================================
  const technicalArticles = {
    1: {
      title: 'Rendimiento y Desgaste en Excavaciones Masivas en Roca a más de 3,800 m.s.n.m.',
      category: 'Geotecnia & Minería',
      date: '14 de Octubre, 2025',
      author: 'Ing. Marco Valdivia — Jefe de Geotecnia YRAMOS',
      image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=1200&q=85',
      content: `
        <p style="font-size: 1.05rem; line-height: 1.7; margin-bottom: 1.2rem;">
          La operación de maquinaria pesada a altitudes superiores a los 3,800 metros sobre el nivel del mar plantea desafíos mecánicos y termodinámicos sustanciales. La menor densidad del aire reduce el oxígeno disponible, impactando la combustión estequiométrica del motor diésel y generando pérdidas de potencia que pueden alcanzar hasta un 18% en motores de aspiración convencional si no se dispone de turbocompresores de geometría variable.
        </p>
        <h4 style="color: var(--navy-900); font-family: var(--font-heading); margin: 1.5rem 0 0.6rem 0; font-size: 1.2rem;">
          1. Desgaste Abrasivo y Selección de Puntas de Balde
        </h4>
        <p style="font-size: 0.95rem; line-height: 1.65; color: var(--steel-600); margin-bottom: 1rem;">
          En formaciones andesíticas y cuarcitas fracturadas, el índice de abrasividad Schimazek supera los 2.4 N/mm. En YRAMOS implementamos blindajes bimetálicos de carburo de cromo en los cantos de los baldes y puntas Heavy Duty Penetration (HDP), lo que incrementó la vida útil de los elementos de desgaste en un 42% en el proyecto Minera Aurora.
        </p>
        <h4 style="color: var(--navy-900); font-family: var(--font-heading); margin: 1.5rem 0 0.6rem 0; font-size: 1.2rem;">
          2. Optimización del Factor de Carga y Telemetría
        </h4>
        <p style="font-size: 0.95rem; line-height: 1.65; color: var(--steel-600); margin-bottom: 1.5rem;">
          Mediante telemetría en tiempo real, monitoreamos las temperaturas de escape, la presión en el riel de inyección y los picos de presión hidráulica al penetrar en roca. Al capacitar a los operadores en ciclos de excavación de 90° respecto al talud, el tiempo de ciclo disminuyó de 28 a 22 segundos por pase, optimizando el consumo de combustible a 7.8 galones por hora.
        </p>
      `
    },
    2: {
      title: 'Pavimentos de Concreto Postensado vs. Asfalto Modificado: Análisis de Ciclo de Vida',
      category: 'Infraestructura Vial',
      date: '28 de Septiembre, 2025',
      author: 'Ing. Rodrigo Paredes — Gerente de Infraestructura Vial YRAMOS',
      image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=85',
      content: `
        <p style="font-size: 1.05rem; line-height: 1.7; margin-bottom: 1.2rem;">
          En corredores viales de transporte pesado y plataformas logísticas industriales, la decisión entre pavimento rígido postensado y mezcla asfáltica en caliente con polímeros (MAC-2) es determinante para el costo total de posesión (TCO) de la infraestructura a lo largo de un horizonte de 20 a 30 años.
        </p>
        <h4 style="color: var(--navy-900); font-family: var(--font-heading); margin: 1.5rem 0 0.6rem 0; font-size: 1.2rem;">
          1. Comparativa de Mantenimiento y Resistencia a Deformaciones
        </h4>
        <p style="font-size: 0.95rem; line-height: 1.65; color: var(--steel-600); margin-bottom: 1rem;">
          Mientras que el asfalto ofrece menor costo inicial (CAPEX 25% menor), requiere recapeos y sellados periódicos cada 4 a 6 años frente al ahuellamiento por tránsito canalizado de camiones de 48 toneladas. Por el contrario, las losas de concreto postensado sin juntas eliminan los puntos débiles de transferencia de carga, resistiendo derrames de hidrocarburos y cargas estáticas extremas sin deformación residual.
        </p>
        <h4 style="color: var(--navy-900); font-family: var(--font-heading); margin: 1.5rem 0 0.6rem 0; font-size: 1.2rem;">
          2. Conclusión Técnica de YRAMOS
        </h4>
        <p style="font-size: 0.95rem; line-height: 1.65; color: var(--steel-600); margin-bottom: 1.5rem;">
          Para accesos mineros y patios logísticos de maniobras, el pavimento de concreto representa un ahorro acumulado del 34% en OPEX a los 15 años. Para autopistas interurbanas de gran longitud, las soluciones híbridas con base estabilizada con cemento y carpeta asfáltica polimérica ofrecen el mejor equilibrio en confort dinámico y velocidad constructiva.
        </p>
      `
    },
    3: {
      title: 'Protocolo Cero Accidentes: Telemetría 24/7 y Cámaras de Detección de Fatiga en Cabina',
      category: 'Seguridad & SST',
      date: '10 de Septiembre, 2025',
      author: 'Ing. Sandra Huamán — Superintendente SST YRAMOS',
      image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=85',
      content: `
        <p style="font-size: 1.05rem; line-height: 1.7; margin-bottom: 1.2rem;">
          La seguridad ocupacional en obras de construcción pesada evoluciona desde la simple entrega de EPP hacia la integración de inteligencia artificial y telemetría en cabina para la prevención proactiva de incidentes.
        </p>
        <h4 style="color: var(--navy-900); font-family: var(--font-heading); margin: 1.5rem 0 0.6rem 0; font-size: 1.2rem;">
          1. Sistema Anti-Fatiga DSS (Driver Safety System)
        </h4>
        <p style="font-size: 0.95rem; line-height: 1.65; color: var(--steel-600); margin-bottom: 1rem;">
          Equipamos el 100% de nuestra flota de camiones volquete y tractores con cámaras infrarrojas capaces de analizar patrones de parpadeo, cabeceo y dirección de la mirada del operador. En caso de detectar micro-sueño o distracción de más de 1.8 segundos, el sistema emite una vibración en el asiento y una alarma sonora inmediata, enviando una alerta al centro de control.
        </p>
        <h4 style="color: var(--navy-900); font-family: var(--font-heading); margin: 1.5rem 0 0.6rem 0; font-size: 1.2rem;">
          2. Resultados Comprobados
        </h4>
        <p style="font-size: 0.95rem; line-height: 1.65; color: var(--steel-600); margin-bottom: 1.5rem;">
          En los últimos 24 meses y tras más de 2 millones de kilómetros recorridos por nuestra flota en obras a nivel nacional, YRAMOS mantiene un índice de frecuencia de accidentes de 0.00. La tecnología combinada con pausas activas obligatorias demuestra que la meta de Cero Accidentes es una realidad operativa alcanzable.
        </p>
      `
    }
  };

  const articleModal = document.getElementById('articleModal');
  const articleModalBody = document.getElementById('articleModalBody');
  const articleModalCloseBtn = document.getElementById('articleModalCloseBtn');

  const openArticleModal = (articleId) => {
    const art = technicalArticles[articleId];
    if (!art) return;

    articleModalBody.innerHTML = `
      <div class="modal-content-grid">
        <div class="modal-hero-img-wrap">
          <img src="${art.image}" alt="${art.title}" class="modal-hero-img">
        </div>
        <div class="modal-details-padding">
          <div class="modal-header-meta">
            <span class="badge-category">${art.category}</span>
            <span style="font-size: 0.82rem; color: var(--steel-500);"><i class="fa-regular fa-calendar"></i> ${art.date}</span>
          </div>

          <h2 class="modal-project-title" style="font-size: 1.6rem; margin-bottom: 0.8rem;">${art.title}</h2>
          
          <div style="background: var(--steel-100); border-radius: var(--radius-sm); padding: 0.8rem 1rem; margin-bottom: 1.5rem; display: flex; align-items: center; gap: 0.8rem;">
            <i class="fa-solid fa-user-tie text-amber" style="font-size: 1.2rem;"></i>
            <span style="font-size: 0.85rem; font-weight: 700; color: var(--navy-900);">${art.author}</span>
          </div>

          <div class="article-text-content">
            ${art.content}
          </div>

          <div style="margin-top: 2rem; padding-top: 1.2rem; border-top: 1px solid var(--steel-200); display: flex; gap: 1rem; flex-wrap: wrap;">
            <a href="#cotizar" class="btn btn-primary btn-article-quote">
              <i class="fa-solid fa-calculator"></i>
              <span>Consultar Viabilidad para mi Proyecto</span>
            </a>
            <a href="https://wa.me/51954395659?text=Hola%20YRAMOS%2C%20le%C3%AD%20el%20art%C3%ADculo%20sobre%20${encodeURIComponent(art.title)}" target="_blank" rel="noopener noreferrer" class="btn btn-whatsapp-direct">
              <i class="fa-brands fa-whatsapp"></i>
              <span>Conversar con el Autor</span>
            </a>
          </div>
        </div>
      </div>
    `;

    articleModal.classList.add('active');
    articleModal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';

    const btnQuote = articleModalBody.querySelector('.btn-article-quote');
    if (btnQuote) {
      btnQuote.addEventListener('click', closeArticleModal);
    }
  };

  const closeArticleModal = () => {
    articleModal.classList.remove('active');
    articleModal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  };

  document.querySelectorAll('.btn-read-article').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const id = btn.getAttribute('data-article-id');
      if (id) openArticleModal(id);
    });
  });

  document.querySelectorAll('.blog-card').forEach(card => {
    card.addEventListener('click', () => {
      const id = card.getAttribute('data-article-id');
      if (id) openArticleModal(id);
    });
  });

  if (articleModalCloseBtn) {
    articleModalCloseBtn.addEventListener('click', closeArticleModal);
  }

  articleModal.addEventListener('click', (e) => {
    if (e.target === articleModal) closeArticleModal();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && articleModal.classList.contains('active')) {
      closeArticleModal();
    }
  });

  // =========================================================================
  // 10. FORMULARIO DE COTIZACIÓN INTERACTIVO & WHATSAPP
  // =========================================================================
  const quoteForm = document.getElementById('quoteForm');
  const btnSubmitQuote = document.getElementById('btnSubmitQuote');
  const btnWhatsAppDirect = document.getElementById('btnWhatsAppDirect');
  const formSuccessAlert = document.getElementById('formSuccessAlert');
  const btnResetForm = document.getElementById('btnResetForm');
  const serviceTypeSelect = document.getElementById('projectType');
  const projectDetailsTextarea = document.getElementById('projectDetails');

  // Enlaces de servicios
  document.querySelectorAll('.service-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const serviceType = btn.getAttribute('data-service-type');
      if (serviceType && serviceTypeSelect) {
        for (let i = 0; i < serviceTypeSelect.options.length; i++) {
          if (serviceTypeSelect.options[i].text.includes(serviceType)) {
            serviceTypeSelect.selectedIndex = i;
            break;
          }
        }
      }
    });
  });

  if (quoteForm) {
    quoteForm.addEventListener('submit', (e) => {
      e.preventDefault();

      btnSubmitQuote.disabled = true;
      const originalHTML = btnSubmitQuote.innerHTML;
      btnSubmitQuote.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> <span>Procesando Solicitud...</span>';

      setTimeout(() => {
        btnSubmitQuote.disabled = false;
        btnSubmitQuote.innerHTML = originalHTML;
        quoteForm.style.display = 'none';
        if (formSuccessAlert) {
          formSuccessAlert.style.display = 'flex';
          formSuccessAlert.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }
      }, 1200);
    });
  }

  if (btnResetForm) {
    btnResetForm.addEventListener('click', () => {
      quoteForm.reset();
      quoteForm.style.display = 'flex';
      formSuccessAlert.style.display = 'none';
    });
  }

  if (btnWhatsAppDirect) {
    btnWhatsAppDirect.addEventListener('click', () => {
      const name = document.getElementById('clientName').value.trim() || 'No especificado';
      const company = document.getElementById('clientCompany').value.trim() || 'No especificada';
      const phone = document.getElementById('clientPhone').value.trim() || 'No especificado';
      const service = serviceTypeSelect ? serviceTypeSelect.value : 'Consultar Servicios';
      const location = document.getElementById('projectLocation').value.trim() || 'Por definir';
      const description = projectDetailsTextarea ? projectDetailsTextarea.value.trim() : 'Solicitud de cotización de obra.';

      const message = `*SOLICITUD DE COTIZACIÓN - YRAMOS*%0A` +
        `----------------------------------------%0A` +
        `*Contacto:* ${encodeURIComponent(name)}%0A` +
        `*Empresa:* ${encodeURIComponent(company)}%0A` +
        `*Teléfono:* ${encodeURIComponent(phone)}%0A` +
        `*Servicio:* ${encodeURIComponent(service)}%0A` +
        `*Ubicación:* ${encodeURIComponent(location)}%0A` +
        `*Detalles:* ${encodeURIComponent(description)}%0A` +
        `----------------------------------------%0A` +
        `Agradeceré me brinden una estimación técnica y disponibilidad.`;

      window.open(`https://wa.me/51954395659?text=${message}`, '_blank');
    });
  }

  // =========================================================================
  // 11. SMOOTH SCROLL PARA ENLACES ANCLA
  // =========================================================================
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;

      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        e.preventDefault();
        const headerOffset = 76;
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    });
  });

});
